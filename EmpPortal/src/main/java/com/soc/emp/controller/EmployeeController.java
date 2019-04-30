package com.soc.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.soc.emp.model.Employee;
import com.soc.emp.service.EmployeeService;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(value="/employee", method = RequestMethod.GET)
    public List<Employee> listEmployee(){
        return employeeService.findAll();
    }

    @RequestMapping(value = "/employee", method = RequestMethod.POST)
    public Employee create(@RequestBody Employee employee){
        return employeeService.save(employee);
    }

    @RequestMapping(value = "/employee/{id}", method = RequestMethod.GET)
    public Employee findOne(@PathVariable long id){
        return employeeService.findOne(id);
    }

    @RequestMapping(value = "/employee/{id}", method = RequestMethod.PUT)
    public Employee update(@PathVariable long id, @RequestBody Employee employee){
        employee.setId(id);
        return employeeService.save(employee);
    }

    @RequestMapping(value = "/employee/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable(value = "id") Long id){
        employeeService.delete(id);
    }

}

