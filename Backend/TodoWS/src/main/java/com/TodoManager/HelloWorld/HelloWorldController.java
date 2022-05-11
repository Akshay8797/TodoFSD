package com.TodoManager.HelloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(path = "/hello")
	public Hi sayHello() {
		//throw new RuntimeException("Error Occured!");
		return new Hi("Hello User");
	}

	@GetMapping(path = "/hi/{name}")
	public Hi sayHi(@PathVariable String name) {
		return new Hi(String.format("Hi %s", name));
	}
}
