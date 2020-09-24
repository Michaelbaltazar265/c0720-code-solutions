select "a"."line1" as "address",
        "a"."district",
        "c"."name" as "city"
 from "addresses" as "a"
 join "cities" as "c" using ("cityId");





