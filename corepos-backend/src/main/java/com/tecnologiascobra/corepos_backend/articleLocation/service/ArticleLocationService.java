package com.tecnologiascobra.corepos_backend.articleLocation.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tecnologiascobra.corepos_backend.article.repository.ArticleRepository;
import com.tecnologiascobra.corepos_backend.articleLocation.dto.ArticleLocationRequest;
import com.tecnologiascobra.corepos_backend.articleLocation.model.ArticleLocation;
import com.tecnologiascobra.corepos_backend.articleLocation.repository.ArticleLocationRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArticleLocationService {

    private final ArticleLocationRepository locationRepository;
    private final ArticleRepository articleRepository;

    public ArticleLocation createLocation(ArticleLocationRequest request) {
        // Validar existencia del artículo con upc + numArticle
        boolean exists = articleRepository.existsByUpcAndItemNumber(request.getUpc(), request.getItemNumber());
        if (!exists) {
            throw new IllegalArgumentException("Artículo no encontrado con UPC y numArticle");
        }

        // Validar duplicado
        locationRepository.findByUpcAndItemNumberAndStoreId(
                request.getUpc(), request.getItemNumber(), request.getStoreId()).ifPresent(l -> {
                    throw new IllegalStateException("Ubicación ya registrada para ese artículo en esa tienda.");
                });

        ArticleLocation location = ArticleLocation.builder()
                .upc(request.getUpc())
                .itemNumber(request.getItemNumber())
                .storeId(request.getStoreId())
                .salesFloor(request.getSalesFloor())
                .backroom(request.getBackroom())
                .lastUpdated(LocalDateTime.now())
                .build();

        return locationRepository.save(location);
    }

    public Optional<ArticleLocation> getByUpcAndStore(String upc, String storeId) {
        List<ArticleLocation> locations = locationRepository.findByUpcAndStoreId(upc, storeId);
        return locations.stream().findFirst(); // Si solo quieres uno
    }

    public List<ArticleLocation> getAllLocations() {
        return locationRepository.findAll();
    }

    public List<ArticleLocation> getByStore(String storeId) {
        return locationRepository.findByStoreId(storeId);
    }

    public boolean deleteLocation(String id) {
        if (locationRepository.existsById(id)) {
            locationRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
