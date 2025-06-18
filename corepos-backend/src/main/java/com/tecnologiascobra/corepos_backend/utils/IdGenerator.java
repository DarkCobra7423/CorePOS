package com.tecnologiascobra.corepos_backend.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

public class IdGenerator {

    private static final Random random = new Random();

    public static String generateTimestampId() {
        LocalDateTime now = LocalDateTime.now();

        // Formato: yyMMddHHmmssSSS (SSS = milisegundos)
        String timestamp = now.format(DateTimeFormatter.ofPattern("yyMMddHHmmssSSS"));

        // Número aleatorio entre 100 y 999
        int randomNum = 100 + random.nextInt(900);

        return timestamp + randomNum; // Ejemplo: 230524142530123456
    }
}