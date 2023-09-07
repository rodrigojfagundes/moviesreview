package io.github.rodrigojfagundes.moviesreview.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import io.github.rodrigojfagundes.moviesreview.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	@Query("SELECT obj FROM Movie obj")
	Page<Movie> find(Pageable pageable);
	
}
