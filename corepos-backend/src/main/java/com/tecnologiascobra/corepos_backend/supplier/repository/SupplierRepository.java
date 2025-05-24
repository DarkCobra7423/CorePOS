package com.tecnologiascobra.corepos_backend.supplier.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.tecnologiascobra.corepos_backend.supplier.model.Supplier;

public interface SupplierRepository extends MongoRepository<Supplier, String> {
}