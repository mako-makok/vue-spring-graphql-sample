package com.example.calendar.infrastructure.doma.account;

import org.seasar.doma.Dao;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;

import java.util.List;

@ConfigAutowireable
@Dao
public interface AccountEntityDao {

    @Select
    List<AccountEntity> findAll();

    @Select
    AccountEntity findById(Long id);
}
