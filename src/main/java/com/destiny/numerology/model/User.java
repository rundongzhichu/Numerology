package com.destiny.numerology.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Data
public class User {
    private Long id;
    private String username;
    private String password;
}
