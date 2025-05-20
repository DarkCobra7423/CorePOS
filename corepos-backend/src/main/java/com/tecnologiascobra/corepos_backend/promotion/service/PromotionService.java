/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.promotion.service;

import com.tecnologiascobra.corepos_backend.promotion.model.Promotion;
import com.tecnologiascobra.corepos_backend.promotion.repository.PromotionRepository;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author darkcobra7423
 */
@Service
public class PromotionService {
    @Autowired
    private PromotionRepository promotionRepository;

    public Promotion createPromotion(Promotion promotion) {
        return promotionRepository.save(promotion);
    }

    // Obtener todos los promotion
    public List<Promotion> getAllPromotion() {
        return promotionRepository.findAll();
    }

    // Obtener un promotion por id
    /*
     * public Optional<Promotion> getPromotionById(String id) {
     * return promotionRepository.findById(id);
     * }
     */

    // Actualizar promotion
    public Promotion updatePromotion(String id, Promotion promotion) {
        if (promotionRepository.existsById(id)) {
            promotion.setId(id);
            return promotionRepository.save(promotion);
        }
        return null;
    }

    // Eliminar promotion
    public boolean deletePromotion(String id) {
        if (promotionRepository.existsById(id)) {
            promotionRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Promotion> getPromotionByUpc(String upc) {
        return promotionRepository.findByArticle_Upc(upc);
    }

    public Optional<Promotion> getApplicablePromotion(String upc, int quantity) {
        List<Promotion> promotions = promotionRepository.findByArticleUpc(upc);

        return promotions.stream()
                .filter(p -> quantity >= p.getBuyQuantity())
                .max(Comparator.comparingInt(Promotion::getBuyQuantity)); // La más específica
    }

}
