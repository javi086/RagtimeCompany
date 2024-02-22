package com.example.ragtimeCompanyV5.model;

import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User implements Serializable {
    private String name;
    private String paternalName;
    private String maternalName;
    private Date birthdate;
    private String gender;
    private String type;
}
