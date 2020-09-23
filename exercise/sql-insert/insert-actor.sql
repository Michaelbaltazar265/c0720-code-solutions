insert into "actors" ("firstName", "lastName")
values ('John', 'Smith')
returning "actorId", "updatedAt";