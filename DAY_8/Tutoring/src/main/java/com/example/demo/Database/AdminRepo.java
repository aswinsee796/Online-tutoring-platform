package com.example.demo.Database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {

}
