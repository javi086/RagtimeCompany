package com.example.ragtimeCompanyV5.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
@Getter
@Setter
@ToString //Nos permite imprimir un objeto en pantala, sin esta notación nos imprimiria solo la ubicación en memoria
@AllArgsConstructor //Permite tener un constructor con todos los argumento que compone el bean
@NoArgsConstructor //Permite tener un constructor vacio
@Entity //Para que sea tomado por la BD
public class Event implements Serializable {
    @Id //Indicando que debe tomar llave primaria en la BD
    @GeneratedValue(strategy = GenerationType.AUTO)//Para que la llave primaria se genere de forma automatica, puede tomar diferentes tipos (entrar a GeneratedValue)
    private Long id;
    private String name;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;

}
