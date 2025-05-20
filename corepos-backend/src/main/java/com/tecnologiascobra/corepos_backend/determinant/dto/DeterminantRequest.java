package com.tecnologiascobra.corepos_backend.determinant.dto;

import java.time.LocalDate;
import java.util.Map;

import lombok.Data;

@Data
public class DeterminantRequest {
    private String id;

    private String name;

    private String determinant;

    private String address;

    private String city;

    private String state;

    private String zipCode;

    private String format;

    private String storeType;

    private String managerName;

    private Boolean isActive;

    private LocalDate openingDate;

    private String timezone;

    private Map<String, String> businessHours;
}
