package com.soc.emp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.soc.emp.model.Employee;


@Repository
public interface EmployeeDao extends CrudRepository<Employee, Long> {
}

