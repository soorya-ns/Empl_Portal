package com.soc.emp.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.soc.emp.dao.EmployeeDao;
import com.soc.emp.model.Employee;
import com.soc.emp.service.EmployeeService;


@Service(value = "employeeService")
public class EmployeeServiceImpl implements EmployeeService {	
	
	@Autowired
	private EmployeeDao employeeDao;



	private List<SimpleGrantedAuthority> getAuthority() {
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
	}

	public List<Employee> findAll() {
		List<Employee> list = new ArrayList<>();
		employeeDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public Employee findOne(long id) {
		return employeeDao.findById(id).get();
	}

	@Override
	public void delete(long id) {
		employeeDao.deleteById(id);
	}

	@Override
    public Employee save(Employee employee) {
        return employeeDao.save(employee);
    }
}