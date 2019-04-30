package com.soc.emp.service;


import java.util.List;

import com.soc.emp.model.Employee;

public interface EmployeeService {

    Employee save(Employee employee);
    List<Employee> findAll();
    Employee findOne(long id);
    void delete(long id);
}
