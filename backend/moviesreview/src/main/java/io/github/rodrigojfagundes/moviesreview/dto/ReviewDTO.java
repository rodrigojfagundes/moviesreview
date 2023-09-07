package io.github.rodrigojfagundes.moviesreview.dto;

import java.io.Serializable;

import io.github.rodrigojfagundes.moviesreview.entities.Review;

public class ReviewDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	
	private Long id;
	private String text;
	private Long movieId;
	private String movieTitle;
	
	public ReviewDTO() {}

	public ReviewDTO(Long id, String text, Long movieId, String movieTitle) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.movieTitle = movieTitle;
	}
	
	//metodo para transformar um ENTITY/CLASS do tipo REVIEW em
	// REVIEWDTO
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		movieTitle = entity.getMovie().getTitle();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public String getMovieTitle() {
		return movieTitle;
	}

	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}
	
	
	
	
	
}
