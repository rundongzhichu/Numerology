package com.destiny.numerology.schema;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserInfo implements Serializable {

    private String username;
    private String password;

}
