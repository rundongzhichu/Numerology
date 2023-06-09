package com.destiny.numerology.controller;

import com.destiny.numerology.constant.RequestStatus;
import com.destiny.numerology.model.User;
import com.destiny.numerology.schema.ResponseData;
import com.destiny.numerology.schema.UserInfo;
import com.destiny.numerology.service.UserLoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/delegator")
public class LoginController {

    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserLoginService userLoginService;

    @PostMapping("/login")
    @ResponseBody
    public ResponseData login(@RequestBody UserInfo userInfo) {
        ResponseData responseData = new ResponseData();
        responseData.setCode(RequestStatus.SUCCESS.getCode());
        responseData.setMsg(RequestStatus.SUCCESS.getMsg());
        logger.info("user login!");
        userLoginService.createNewUser(new User(null, userInfo.getUsername(), userInfo.getPassword()));
        return responseData;
    }

}
