package com.TodoManager.Todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
	@Autowired
	private TodoHardcodedService todoService;

	@GetMapping("/users/{userName}/todos")
	public List<Todo> getAllTodos(@PathVariable String userName) {
		return todoService.findAll();
	}
	
	@GetMapping("/users/{userName}/todo/{id}")
	public Todo getTodo(@PathVariable String userName, @PathVariable long id) {
		return todoService.findById(id);
	}
	
	@DeleteMapping("/users/{userName}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String userName, @PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		
		if(todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}