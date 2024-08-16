package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
