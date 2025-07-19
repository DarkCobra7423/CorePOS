package com.tecnologiascobra.corepos_backend.purchaseOrder.repository;


import com.tecnologiascobra.corepos_backend.purchaseOrder.model.PurchaseOrder;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseOrderRepository extends MongoRepository<PurchaseOrder, String> {
    // Puedes agregar consultas personalizadas si lo necesitas
}