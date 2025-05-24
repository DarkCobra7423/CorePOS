/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.department.service;

import com.tecnologiascobra.corepos_backend.department.model.Department;
import com.tecnologiascobra.corepos_backend.department.repository.DepartmentRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author darkcobra7423
 */
@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepository departmentRepository;
    
    public Department createDepartment(Department department){
        return departmentRepository.save(department);
    }
    
    public List<Department> getAllDepartment(){
        return departmentRepository.findAll();
    }
    
    public Department updateDepartment(String id, Department department){
        if(departmentRepository.existsById(id)){
            department.setId(id);
            return departmentRepository.save(department);
        }
        return null;
    }
    
    public boolean deleteDepartment(String id){
        if(departmentRepository.existsById(id)){
            departmentRepository.deleteById(id);
            return true;
        }
        return false;
    }
    /*
    public Optional<Department> getDivision(String numDiv){
        return departmentRepository.findByDivision(numDiv);
    }*/
}
