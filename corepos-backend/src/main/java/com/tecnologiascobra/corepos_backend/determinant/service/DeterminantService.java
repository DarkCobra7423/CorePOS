package com.tecnologiascobra.corepos_backend.determinant.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnologiascobra.corepos_backend.determinant.repository.DeterminantRepository;
import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;

@Service
public class DeterminantService {

    @Autowired
    private DeterminantRepository determinantRepository;

    public Determinant createDeterminant(Determinant determinant) {
        return determinantRepository.save(determinant);
    }

    // Obtener todos los determinants
    public List<Determinant> getAllDeterminants() {
        return determinantRepository.findAll();
    }

    // Obtener un determinant por id
    public Optional<Determinant> getDeterminantById(String id) {
        return determinantRepository.findById(id);
    }

    // Actualizar determinant
    public Determinant updateDeterminant(String id, Determinant determinant) {
        if (determinantRepository.existsById(id)) {
            determinant.setId(id);
            return determinantRepository.save(determinant);
        }
        return null;
    }

    // Eliminar determinant
    public boolean deleteDeterminant(String id) {
        if (determinantRepository.existsById(id)) {
            determinantRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
