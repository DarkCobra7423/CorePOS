package com.tecnologiascobra.corepos_backend.sales.repository;

import com.tecnologiascobra.corepos_backend.sales.model.Sales;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRepository extends MongoRepository<Sales, String> {
    // Puedes agregar métodos personalizados aquí si lo necesitas
    // Optional<Sales> findByInvoiceNumber(String invoiceNumber);
}
