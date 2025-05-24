package com.tecnologiascobra.corepos_backend.determinant.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;

@Repository
public interface DeterminantRepository extends MongoRepository<Determinant, String> {
    Optional<Determinant> findByDeterminant(String determinant);

    Optional<Determinant> findByName(String name); // Método para encontrar por nombre

    Optional<Determinant> findById(String id); // Método para encontrar por id
}
