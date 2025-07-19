/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.purchaseOrder.service;

import com.tecnologiascobra.corepos_backend.purchaseOrder.model.PurchaseOrder;
import com.tecnologiascobra.corepos_backend.purchaseOrder.repository.PurchaseOrderRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author darkcobra7423
 */
@Service
public class PurchaseOrderService {
    
    
    @Autowired
    private PurchaseOrderRepository purchaseOrderRepository;

    public PurchaseOrder createPurchaseOrder(PurchaseOrder purchaseOrder) {
        return purchaseOrderRepository.save(purchaseOrder);
    }

    public List<PurchaseOrder> getAllPurchaseOrders() {
        return purchaseOrderRepository.findAll();
    }

    public Optional<PurchaseOrder> getPurchaseOrderById(String id) {
        return purchaseOrderRepository.findById(id);
    }

    public PurchaseOrder updatePurchaseOrder(String id, PurchaseOrder purchaseOrder) {
        if (purchaseOrderRepository.existsById(id)) {
            purchaseOrder.setId(id);
            return purchaseOrderRepository.save(purchaseOrder);
        }
        return null;
    }

    public boolean deletePurchaseOrder(String id) {
        if (purchaseOrderRepository.existsById(id)) {
            purchaseOrderRepository.deleteById(id);
            return true;
        }
        return false;
    }

    
}
