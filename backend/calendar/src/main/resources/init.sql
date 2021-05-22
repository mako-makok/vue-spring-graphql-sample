create table account (
    id integer primary key,
    first_name text not null,
    last_name text not null

);
create sequence account_id_seq;

create table calendar (
    id bigint primary key,
    name text not null,
    account_id bigint not null
);
create sequence calendar_id_seq;

create table plan (
    id bigint primary key,
    calendar_id bigint not null,
    title text not null,
    description text not null,
    place text not null,
    start_time timestamp not null,
    end_time timestamp not null
);
create sequence plan_id_seq;

-- test data
insert into account(id, first_name, last_name)
values
    (nextval('account_id_seq'), 'test', '1'),
    (nextval('account_id_seq'), 'test', '2'),
    (nextval('account_id_seq'), 'test', '3'),
    (nextval('account_id_seq'), 'test', '4'),
    (nextval('account_id_seq'), 'test', '5')
;

insert into calendar(id, name, account_id)
values
    (nextval('calendar_id_seq'), 'テスト', 1),
    (nextval('calendar_id_seq'), '自分の', 1),
    (nextval('calendar_id_seq'), 'トモダチ1', 3),
    (nextval('calendar_id_seq'), 'トモダチ2', 1),
    (nextval('calendar_id_seq'), 'トモダチ3', 2)
;

insert into plan(id, calendar_id, title, description, place, start_time, end_time)
select
       nextval('plan_id_seq'), 1, to_char(cur, 'YYYY/MM/DD'), '', '', cur, cur + '3 hours'
from
     generate_series(now(), now() + '1 months', '1 days') as cur
;