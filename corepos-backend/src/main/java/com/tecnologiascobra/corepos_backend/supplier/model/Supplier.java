package com.tecnologiascobra.corepos_backend.supplier.model;

import lombok.*;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "suppliers")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Supplier {
    @Id
    private String id;

    private String idSuplier;
    private String name;
    private String contactName;
    private String email;
    private String phone;

    private String rfc;

    private Address address;

    private boolean isActive;
    private LocalDate createdAt;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Address {
        private String street;
        private String city;
        private String state;
        private String zipCode;
    }
}