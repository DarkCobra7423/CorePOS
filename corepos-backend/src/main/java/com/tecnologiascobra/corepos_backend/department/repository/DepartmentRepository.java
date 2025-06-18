/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.department.repository;

import com.tecnologiascobra.corepos_backend.department.model.Department;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

/**
 *
 * @author darkcobra7423
 */
@Repository
public interface DepartmentRepository extends MongoRepository<Department, String> {
    Optional<Department> findByNum(String num);
}
