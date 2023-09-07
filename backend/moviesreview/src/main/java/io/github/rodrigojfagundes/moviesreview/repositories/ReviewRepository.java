package io.github.rodrigojfagundes.moviesreview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.rodrigojfagundes.moviesreview.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
