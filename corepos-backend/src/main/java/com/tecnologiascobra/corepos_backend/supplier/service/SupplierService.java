package com.tecnologiascobra.corepos_backend.supplier.service;

import com.tecnologiascobra.corepos_backend.supplier.model.Supplier;
import com.tecnologiascobra.corepos_backend.supplier.repository.SupplierRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SupplierService {

    @Autowired
    private final SupplierRepository supplierRepository;

    public Supplier create(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public List<Supplier> getAll() {
        return supplierRepository.findAll();
    }

    public Optional<Supplier> getByIdSuplier(String idSuplier) {
        return supplierRepository.findByIdSuplier(idSuplier);
    }

    public Supplier update(String id, Supplier supplier) {
        supplier.setId(id);
        return supplierRepository.save(supplier);
    }

    public void delete(String id) {
        supplierRepository.deleteById(id);
    }
}