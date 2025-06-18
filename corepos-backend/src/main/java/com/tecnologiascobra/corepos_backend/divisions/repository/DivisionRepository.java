/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.divisions.repository;

import com.tecnologiascobra.corepos_backend.divisions.model.Division;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author darkcobra7423
 */
public interface DivisionRepository extends MongoRepository<Division, String> {
    // Optional<Division> findByDivision(String numDiv);
    Optional<Division> findByNumDiv(String numDiv); // correcto

}
