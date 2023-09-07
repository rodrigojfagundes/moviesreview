package io.github.rodrigojfagundes.moviesreview.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.rodrigojfagundes.moviesreview.dto.ReviewDTO;
import io.github.rodrigojfagundes.moviesreview.entities.Movie;
import io.github.rodrigojfagundes.moviesreview.entities.Review;
import io.github.rodrigojfagundes.moviesreview.entities.User;
import io.github.rodrigojfagundes.moviesreview.repositories.MovieRepository;
import io.github.rodrigojfagundes.moviesreview.repositories.ReviewRepository;
import io.github.rodrigojfagundes.moviesreview.repositories.UserRepository;
import io.github.rodrigojfagundes.moviesreview.services.exceptions.DatabaseException;
import io.github.rodrigojfagundes.moviesreview.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll() {
		List<Review> reviews = repository.findAll();
		return reviews.stream().map(review -> new ReviewDTO(review)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		Optional<Review> obj = repository.findById(id);
		Review review = obj.orElseThrow(() -> new ResourceNotFoundException("Review not found"));
		return new ReviewDTO(review);
	}
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
	Review review = new Review();
		
	Authentication authentication = SecurityContextHolder.getContext()
			.getAuthentication();
	
	User userAuthenticated = userRepository
			.findByEmail(authentication.getName());
		
	Movie movie = movieRepository.getOne(dto.getMovieId());	
	
	review.setUser(userAuthenticated);
	review.setMovie(movie);
	review.setText(dto.getText());
	
	review = repository.save(review);
	
	return new ReviewDTO(review);
	}
	
	@Transactional
	public ReviewDTO update(Long id, ReviewDTO dto) {
		try {
			Review review = new Review();
			
			Authentication authentication = SecurityContextHolder
					.getContext().getAuthentication();
			
			User userAuthenticated = userRepository.findByEmail(authentication.getName());
			
			Movie movie = movieRepository.getOne(dto.getMovieId());
			
			review.setUser(userAuthenticated);
			review.setMovie(movie);
			review.setText(dto.getText());
			
			review = repository.save(review);
			
			return new ReviewDTO(review);
		}
		catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id " + id + "not found");
		}
	}
	
	
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("id " + id + "not found");
		}
		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
}