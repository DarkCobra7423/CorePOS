package com.tecnologiascobra.corepos_backend.articleItem.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tecnologiascobra.corepos_backend.articleItem.model.ArticleItem;

public interface ArticleItemRepository extends MongoRepository<ArticleItem, String> {

    Optional<ArticleItem> findByNumItem(String numItem);

    Optional<ArticleItem> findFirstByUpc(String upc);

    Optional<ArticleItem> findFirstByNumItem(String numItem);
}
