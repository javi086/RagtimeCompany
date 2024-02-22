package com.example.ragtimeCompanyV5.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


//ESTA CONFIGURACIÓN YA NO ES NECESARIA PUES EN LAS VERSIONES ACTUALES DE SPRING YA ESCANEA LOS BEANS AUTOMATICAMENTE, SIN EMBARGO SE PUEDE USAR SI SE
//REQUIERE ESPECIFICAR UNA RATA EN PARTICULAR
@Configuration
@ComponentScan("com.example.ragtimeCompanyV5")
public class AppConfig {
}
