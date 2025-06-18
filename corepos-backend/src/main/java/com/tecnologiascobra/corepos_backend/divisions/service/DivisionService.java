/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.divisions.service;

import com.tecnologiascobra.corepos_backend.divisions.model.Division;
import com.tecnologiascobra.corepos_backend.divisions.repository.DivisionRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author darkcobra7423
 */
@Service
public class DivisionService {
    @Autowired

    private DivisionRepository divisionRepository;

    public Division createDivision(Division division) {
        return divisionRepository.save(division);
    }

    public List<Division> getAllDivision() {
        return divisionRepository.findAll();
    }

    /*
     * public Division getDivisionById(String id) {
     * return divisionRepository.findById(id).orElse(null);
     * }
     */
    public Optional<Division> getDivisionById(String id) {
        return divisionRepository.findById(id);
    }

    public Division updateDivision(String id, Division division) {
        if (divisionRepository.existsById(id)) {
            division.setId(id);
            return divisionRepository.save(division);
        }
        return null;
    }

    public boolean deleteDivision(String id) {
        if (divisionRepository.existsById(id)) {
            divisionRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
