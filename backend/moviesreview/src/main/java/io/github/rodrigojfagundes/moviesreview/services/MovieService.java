package io.github.rodrigojfagundes.moviesreview.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.rodrigojfagundes.moviesreview.dto.MovieDTO;
import io.github.rodrigojfagundes.moviesreview.dto.ReviewDTO;
import io.github.rodrigojfagundes.moviesreview.entities.Movie;
import io.github.rodrigojfagundes.moviesreview.entities.Review;
import io.github.rodrigojfagundes.moviesreview.repositories.MovieRepository;
import io.github.rodrigojfagundes.moviesreview.repositories.ReviewRepository;
import io.github.rodrigojfagundes.moviesreview.services.exceptions.DatabaseException;
import io.github.rodrigojfagundes.moviesreview.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(PageRequest pageRequest) {
		Page<Movie> page = repository.find(pageRequest);
		return page.map(movie -> new MovieDTO(movie));
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("Filme nao encontrado"));	
		return new MovieDTO(movie);
	}
	
	@Transactional
	public MovieDTO insert(MovieDTO dto) {
		Movie movie = new Movie();
		
		copyDtoToEntity(dto, movie);
		movie = repository.save(movie);
		
		return new MovieDTO(movie);
	}
	
	@Transactional
	public MovieDTO update(Long id, MovieDTO dto) {
		try {
			Movie movie = repository.getOne(id);
			copyDtoToEntity(dto, movie);
			movie = repository.save(movie);
			return new MovieDTO(movie);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id " + id + "not found");
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id " + id + "not found");
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
	
	private void copyDtoToEntity(MovieDTO dto, Movie entity) {
		entity.setTitle(dto.getTitle());
		entity.setSubTitle(dto.getSubTitle());
		entity.setYear(dto.getYear());
		entity.setImgUrl(dto.getImgUrl());
		entity.setSynopsis(dto.getSynopsis());
		
		for (ReviewDTO reviewDTO : dto.getReviews()) {
			Review review = reviewRepository.getOne(reviewDTO.getId());
			entity.getReviews().add(review);
		}
		
	}
	
}