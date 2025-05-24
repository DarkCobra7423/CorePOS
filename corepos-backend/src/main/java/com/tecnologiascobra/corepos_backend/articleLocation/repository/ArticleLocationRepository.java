package com.tecnologiascobra.corepos_backend.articleLocation.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.tecnologiascobra.corepos_backend.articleLocation.model.ArticleLocation;

public interface ArticleLocationRepository extends MongoRepository<ArticleLocation, String> {
    Optional<ArticleLocation> findByUpcAndItemNumberAndStoreId(String upc, String itemNumber, String storeId);

    List<ArticleLocation> findByUpcAndStoreId(String upc, String storeId);

    List<ArticleLocation> findByStoreId(String storeId);
}