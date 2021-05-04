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

