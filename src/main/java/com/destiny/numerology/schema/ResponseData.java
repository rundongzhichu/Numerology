package com.destiny.numerology.schema;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
public class ResponseData<D> implements Serializable {

    private String code;
    private String msg;
    private D data;
    private Date time;

}
