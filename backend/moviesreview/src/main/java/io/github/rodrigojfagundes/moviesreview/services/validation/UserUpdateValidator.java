package io.github.rodrigojfagundes.moviesreview.services.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import io.github.rodrigojfagundes.moviesreview.dto.UserUpdateDTO;
import io.github.rodrigojfagundes.moviesreview.entities.User;
import io.github.rodrigojfagundes.moviesreview.repositories.UserRepository;
import io.github.rodrigojfagundes.moviesreview.resources.exceptions.FieldMessage;

public class UserUpdateValidator implements ConstraintValidator<UserUpdateValid, UserUpdateDTO> {
	
	//HTTPSERVLETREQUEST guarda as informacoes da requesicao
	//a partir dele e possivel pegar o id da requisicao
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private UserRepository repository;

	@Override
	public void initialize(UserUpdateValid ann) {
		
	}
	
	@Override
	public boolean isValid(UserUpdateDTO dto, ConstraintValidatorContext context) {
		@SuppressWarnings("unchecked")
		var uriVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
		long userId = Long.parseLong(uriVars.get("id"));
		
		List<FieldMessage> list = new ArrayList<>();
		
		User user = repository.findByUsername(dto.getUsername());
		if (user != null && userId != user.getId()) {
			list.add(new FieldMessage("username", "Username ja existe"));
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName()).addConstraintViolation();
		}
		return list.isEmpty();
	}
	
}
