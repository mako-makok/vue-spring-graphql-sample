package com.example.calendar.domain.account;

import java.util.List;

public interface AccountRepository {

    List<Account> findAll();

    Account findById(Long id);
}
