package com.tecnologiascobra.corepos_backend.department.model;

import com.tecnologiascobra.corepos_backend.divisions.model.Division;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("departments")
public class Department {
    @Id
    private String id;

    private String num;
    private String name;

    private Division division;

    public Department(String num) {
        this.num = num;
    }
}
