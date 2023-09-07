package io.github.rodrigojfagundes.moviesreview.components;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.stereotype.Component;

import io.github.rodrigojfagundes.moviesreview.entities.User;
import io.github.rodrigojfagundes.moviesreview.repositories.UserRepository;

@Component
public class JwtTokenEnhancer implements TokenEnhancer{
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
		//o authentication.getname retorna o nome do usuario, q no caso
		//e o email
		User user = userRepository.findByUsername(authentication.getName());
		
		Map<String, Object> map = new HashMap<>();
		map.put("userId", user.getId());
		map.put("username", user.getUsername());
		
		DefaultOAuth2AccessToken token = (DefaultOAuth2AccessToken) accessToken;
		
		token.setAdditionalInformation(map);
		
		return accessToken;
		
	}

}
