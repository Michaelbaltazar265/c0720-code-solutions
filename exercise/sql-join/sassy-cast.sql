select "a"."firstName", 
        "a"."lastName", 
        "castMembers"."filmId",
        "films"."title"
  from "actors" as "a"  
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  where "title" = 'Jersey Sassy';