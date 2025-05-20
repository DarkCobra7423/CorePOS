/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.determinant.model;

import java.time.LocalDate;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;

/**
 *
 * @author darkcobra7423
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document("determinants")
public class Determinant {

    /*
     * {
     * "_id": "D001",
     * "name": "Sucursal Centro",
     * "determinant": "4232",
     * "address": "Av. Principal #123, Ciudad",
     * "city": "Ciudad de México",
     * "state": "CDMX",
     * "zipCode": "06000",
     * "format": "Retail",
     * "storeType": "Flagship",
     * "managerName": "Carlos Ángel",
     * "isActive": true,
     * "openingDate": "2020-03-15T00:00:00",
     * "timezone": "America/Mexico_City",
     * "businessHours": {
     * "lunes": "08:00-18:00",
     * "sabado": "09:00-14:00"
     * }
     * }
     */

    @Id
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

    @JsonProperty("isActive")
    private Boolean isActive;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate openingDate;

    private String timezone;

    private Map<String, String> businessHours;
}