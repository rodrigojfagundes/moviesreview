package io.github.rodrigojfagundes.moviesreview.dto;

import io.github.rodrigojfagundes.moviesreview.services.validation.UserUpdateValid;

//verifica se o email q eu estou inserindo ja exist n banco
@UserUpdateValid
public class UserUpdateDTO extends UserDTO {
	private static final long serialVersionUID = 1L;
	
	
	
}
