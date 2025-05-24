package com.tecnologiascobra.corepos_backend.supplier.service;

import com.tecnologiascobra.corepos_backend.supplier.model.ArticleSupplier;
import com.tecnologiascobra.corepos_backend.supplier.repository.ArticleSupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleSupplierService {

    private final ArticleSupplierRepository repository;

    public ArticleSupplier create(ArticleSupplier articleSupplier) {
        return repository.save(articleSupplier);
    }

    public List<ArticleSupplier> getAll() {
        return repository.findAll();
    }

    public List<ArticleSupplier> getByUpc(String upc) {
        return repository.findByUpc(upc);
    }

    public List<ArticleSupplier> getByNumArticle(String numArticle) {
        return repository.findByNumArticle(numArticle);
    }

    public List<ArticleSupplier> getBySupplierId(String supplierId) {
        return repository.findBySupplierId(supplierId);
    }
}