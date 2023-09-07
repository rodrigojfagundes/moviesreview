package io.github.rodrigojfagundes.moviesreview.services.validation;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import io.github.rodrigojfagundes.moviesreview.dto.UserInsertDTO;
import io.github.rodrigojfagundes.moviesreview.entities.User;
import io.github.rodrigojfagundes.moviesreview.repositories.UserRepository;
import io.github.rodrigojfagundes.moviesreview.resources.exceptions.FieldMessage;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {
	
	@Autowired
	private UserRepository repository;
	

	public void initialize(UserInsertValid ann) {
		
	}
	
	
	//verificar se o objeto USERINSERTDTO vai ser VALIDO ou NAO
	@Override
	public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {
		List<FieldMessage> list = new ArrayList<>();
		
		//coloque aqui seus testes de validacao, acresentando o
		//FIELDMESSAGE a lista
		User user = repository.findByEmail(dto.getEmail());
		if (user != null) {
			list.add(new FieldMessage("email", "Email ja existe"));
		}
		//pecorre a lista de FIELDMESSAGE para inserir os erros na
		//lista de BEANS VALIDATION
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getFieldName()).addPropertyNode(e.getFieldName()).addConstraintViolation();
		}
		return list.isEmpty();
	}
	
}
