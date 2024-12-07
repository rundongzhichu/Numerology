package com.destiny.numerology;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// 配置mayBatis接口类所在位置
@MapperScan("com.destiny.numerology.dao")
public class NumerologyApplication {

    public static void main(String[] args) {
        SpringApplication.run(NumerologyApplication.class, args);
    }

}
