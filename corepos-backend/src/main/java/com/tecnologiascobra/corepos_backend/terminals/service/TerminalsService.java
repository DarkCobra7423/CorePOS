package com.tecnologiascobra.corepos_backend.terminals.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnologiascobra.corepos_backend.terminals.model.Terminals;
import com.tecnologiascobra.corepos_backend.terminals.repository.TerminalsRepository;

@Service
public class TerminalsService {
    @Autowired
    private TerminalsRepository terminalRepository;

    public Terminals createTerminal(Terminals terminal) {
        return terminalRepository.save(terminal);
    }

    // Obtener todos los terminal
    public List<Terminals> getAllTerminal() {
        return terminalRepository.findAll();
    }

    // Obtener un terminal por id
    /*
     * public Optional<Terminal> getTerminalById(String id) {
     * return terminalRepository.findById(id);
     * }
     */

    // Actualizar terminal
    public Terminals updateTerminal(String id, Terminals terminal) {
        if (terminalRepository.existsById(id)) {
            terminal.setId(id);
            return terminalRepository.save(terminal);
        }
        return null;
    }

    // Eliminar terminal
    public boolean deleteTerminal(String id) {
        if (terminalRepository.existsById(id)) {
            terminalRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
