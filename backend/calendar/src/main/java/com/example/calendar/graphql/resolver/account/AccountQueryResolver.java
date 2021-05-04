package com.example.calendar.graphql.resolver.account;


import com.example.calendar.application.account.GetAccountService;
import com.example.calendar.domain.account.Account;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AccountQueryResolver implements GraphQLQueryResolver {

    private final GetAccountService getAccountService;

    AccountQueryResolver(GetAccountService getAccountService) {
        this.getAccountService = getAccountService;
    }

    public List<Account> accounts() {
        return getAccountService.findAll();
    }

    public Account account(Long id) {
        return getAccountService.findById(id);
    }

}
