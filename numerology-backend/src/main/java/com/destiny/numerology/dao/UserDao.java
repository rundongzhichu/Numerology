package com.destiny.numerology.dao;

import com.destiny.numerology.model.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {

    int createUser(User user);

}
