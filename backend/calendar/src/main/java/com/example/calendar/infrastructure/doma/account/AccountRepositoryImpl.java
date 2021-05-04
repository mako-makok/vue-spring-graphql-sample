package com.example.calendar.infrastructure.doma.account;

import com.example.calendar.domain.account.Account;
import com.example.calendar.domain.account.AccountRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class AccountRepositoryImpl implements AccountRepository {

    private final AccountEntityDao accountEntityDao;

    AccountRepositoryImpl(AccountEntityDao accountEntityDao) {
        this.accountEntityDao = accountEntityDao;
    }

    @Override
    public List<Account> findAll() {
        return accountEntityDao.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Account findById(Long id) {
        return toDomain(accountEntityDao.findById(id));
    }

    private Account toDomain(AccountEntity entity) {
        return new Account(entity.id, entity.firstName, entity.lastName);
    }
}
