select "payments"."amount" as "highestPayment", 
       "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName"
from "payments"
join "customers" using ("customerId") 
order by  "payments". "amount" desc 
limit 10;       
