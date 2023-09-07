package io.github.rodrigojfagundes.moviesreview.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import io.github.rodrigojfagundes.moviesreview.dto.ReviewDTO;
import io.github.rodrigojfagundes.moviesreview.services.ReviewService;

@RestController
@RequestMapping(value = "/reviews")
public class ReviewResource {
	
	@Autowired
	private ReviewService service;
	
	@GetMapping
	public ResponseEntity<List<ReviewDTO>> findAll(){
		List<ReviewDTO> reviews = service.findAll();
		return ResponseEntity.ok().body(reviews);
	}
	
	@PostMapping
	public ResponseEntity<ReviewDTO> insert (@RequestBody ReviewDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<ReviewDTO> update (@PathVariable Long id, @RequestBody ReviewDTO dto) {
		ReviewDTO newDTO = service.update(id, dto);
		return ResponseEntity.ok().body(newDTO);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<ReviewDTO> delete (@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}