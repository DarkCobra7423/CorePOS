/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.department.controller;

import com.tecnologiascobra.corepos_backend.department.dto.DepartmentRequest;
import com.tecnologiascobra.corepos_backend.department.model.Department;
import com.tecnologiascobra.corepos_backend.department.service.DepartmentService;
import com.tecnologiascobra.corepos_backend.divisions.model.Division;
import com.tecnologiascobra.corepos_backend.divisions.repository.DivisionRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author darkcobra7423
 */
@RestController
@RequestMapping("/api/department")
@Validated
@RequiredArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;
    private final DivisionRepository divisionRepository;

    @PostMapping
    public ResponseEntity<Department> createDepartment(@RequestBody @Valid DepartmentRequest dto) {
        Division division = divisionRepository.findByNumDiv(dto.getDivision())
                .orElseThrow(() -> new RuntimeException("Division nor found"));

        Division div = new Division(division.getId(), division.getNumDiv());

        Department department = Department.builder()
                .num(dto.getNum())
                .name(dto.getName())
                .division(div)
                .build();

        Department saved = departmentService.createDepartment(department);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PutMapping("/{id}") // ✅ cambiar de @GetMapping
    public ResponseEntity<Department> updateDepartment(@PathVariable String id,
            @RequestBody @Valid Department department) {
        Department updated = departmentService.updateDepartment(id, department);
        return updated != null ? ResponseEntity.ok(updated)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable String id) {
        return departmentService.deleteDepartment(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.noContent().build();
    }

    /*
    @GetMapping("/{div}")
    public ResponseEntity<Department> getDivision(@PathVariable String numDiv){
        return departmentService.getDivision(numDiv)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }*/
}
