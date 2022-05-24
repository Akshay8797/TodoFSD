package com.TodoManager.Jwt.Resource;

public class AuthenticationException extends RuntimeException {
	private static final long serialVersionUID = -5741146257337929820L;

	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
}
