package com.tecnologiascobra.corepos_backend.promotion.repository;

import com.tecnologiascobra.corepos_backend.promotion.model.Promotion;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author darkcobra7423
 */
@Repository
public interface PromotionRepository extends MongoRepository<Promotion, String> {
    Optional<Promotion> findByName(String promotion);

    Optional<Promotion> findByArticle_Upc(String upc);

    List<Promotion> findByArticleUpc(String upc);
}
