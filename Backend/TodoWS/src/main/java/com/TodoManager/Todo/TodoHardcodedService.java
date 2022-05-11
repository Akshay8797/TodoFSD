package com.TodoManager.Todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "Akshay8797", "Learn Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "Akshay8797", "Learn Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "Akshay8797", "Learn Oracle ADF", new Date(), false));
		todos.add(new Todo(++idCounter, "Akshay8797", "Complete ASE", new Date(), false));
		todos.add(new Todo(++idCounter, "Akshay8797", "Complete ASENOD", new Date(), false));
		todos.add(new Todo(++idCounter, "Akshay8797", "Complete HSIA-E", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;
		else if (todos.remove(todo))
			return todo;
		return null;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}
}