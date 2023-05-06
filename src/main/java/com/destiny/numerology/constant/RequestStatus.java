package com.destiny.numerology.constant;

import lombok.Getter;

@Getter
public enum RequestStatus {
    SUCCESS("200", "Request processing success!"),
    ERROR("400", "Server processing error");

    private String code;
    private String msg;

    RequestStatus(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
