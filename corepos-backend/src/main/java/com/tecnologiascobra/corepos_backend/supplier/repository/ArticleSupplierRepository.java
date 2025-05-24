package com.tecnologiascobra.corepos_backend.supplier.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.tecnologiascobra.corepos_backend.supplier.model.ArticleSupplier;

public interface ArticleSupplierRepository extends MongoRepository<ArticleSupplier, String> {
    List<ArticleSupplier> findByUpc(String upc);

    List<ArticleSupplier> findByNumArticle(String numArticle);

    List<ArticleSupplier> findBySupplierId(String supplierId);
}