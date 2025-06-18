/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.divisions.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnologiascobra.corepos_backend.divisions.dto.DivisionRequest;
import com.tecnologiascobra.corepos_backend.divisions.model.Division;
import com.tecnologiascobra.corepos_backend.divisions.service.DivisionService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.RequestBody;
import lombok.RequiredArgsConstructor;

/**
 *
 * @author darkcobra7423
 */
@RestController
@RequestMapping("/api/divisions")
@RequiredArgsConstructor
public class DivisionController {

    private final DivisionService divisionService;

    @PostMapping
    public ResponseEntity<Division> createDivision(@RequestBody @Valid DivisionRequest dto) {
        Division division = Division.builder()
                .numDiv(dto.getNumDiv())
                .build();

        Division saved = divisionService.createDivision(division);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<Division>> getAll() {
        return ResponseEntity.ok(divisionService.getAllDivision());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Division> getById(@PathVariable String id) {
        return divisionService.getDivisionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Division> update(@PathVariable String id, @RequestBody Division division) {
        Division updated = divisionService.updateDivision(id, division);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        return divisionService.deleteDivision(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}