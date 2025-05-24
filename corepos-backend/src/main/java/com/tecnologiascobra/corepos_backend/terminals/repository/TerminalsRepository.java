package com.tecnologiascobra.corepos_backend.terminals.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;
import com.tecnologiascobra.corepos_backend.determinant.model.DeterminantSummary;
import com.tecnologiascobra.corepos_backend.terminals.model.Terminals;

public interface TerminalsRepository extends MongoRepository<Terminals, String> {

}
