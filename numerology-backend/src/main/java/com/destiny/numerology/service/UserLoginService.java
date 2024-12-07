package com.destiny.numerology.service;

import com.destiny.numerology.dao.UserDao;
import com.destiny.numerology.model.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserLoginService {

    @Resource
    private UserDao userDao;

    public void createNewUser(User user) {
        userDao.createUser(user);
    }

}
