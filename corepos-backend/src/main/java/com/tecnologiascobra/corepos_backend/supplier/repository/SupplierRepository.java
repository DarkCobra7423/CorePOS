package com.tecnologiascobra.corepos_backend.supplier.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.tecnologiascobra.corepos_backend.supplier.model.Supplier;

public interface SupplierRepository extends MongoRepository<Supplier, String> {
    Optional<Supplier> findByName(String name);

    Optional<Supplier> findByIdSuplier(String idSuplier);
}