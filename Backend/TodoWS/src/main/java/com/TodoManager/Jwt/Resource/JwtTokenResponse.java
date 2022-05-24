package com.TodoManager.Jwt.Resource;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {
	private static final long serialVersionUID = -1318881620973855743L;

	private final String token;

	public JwtTokenResponse(String token) {
		this.token = token;
	}

	public String getToken() {
		return this.token;
	}
}