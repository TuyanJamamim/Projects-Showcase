select	* from sales;
 select SaleDate, Amount, Customers from sales;
 select Amount, Customers, GeoID	from sales;
 select SaleDate, Amount, Boxes, Amount / Boxes from sales;
 select SaleDate, Amount, Boxes, Amount / Boxes as 'Amount Per Box' from sales;
 
 select * from sales
 where Amount > 10000;
 
 select * from sales
 where Amount > 10000
 order by Amount desc;
 
 select	* from sales
 where	GeoID = 'g1'
 order by PID , Amount desc;
 
 select * from sales
 where amount> 10000 and SaleDate >= '2022-01-01';
 
 select SaleDate, Amount from sales
 where Amount > 10000 and year(SaleDate) = '2022'
 order by Amount desc;

select SPID, Boxes from sales
where Boxes > 0 and Boxes<=50
order by Boxes desc	;

select SPID, Boxes from sales
where Boxes between 1 and 50
order by Boxes;

select * from sales
where SaleDate >= '2022-01-01' and Amount > 10000
order by Amount desc;

select SaleDate, Amount from sales
where	Amount > 10000 and year(SaleDate) = '2022'
order by Amount;

select SaleDate, Amount, Boxes, weekday(SaleDate) as 'Day of the week' from sales
where weekday(SaleDate) = '4'
order by Amount desc;

/* In Clause */
select * from people
where Team = 'Delish' or Team = 'Jucies';

select * from people
where Team in ('Delish' , 'Jucies'); /* this is used to filter specific words from a column */

/* Pattern Match */

select * from people
where Salesperson like 'B%';/* person who only have B at the start of their names */

select * from people
where Salesperson like	'%B%';/* salesperson who have B at the begining of their any names */

/* Case Operator */
select * from sales;
select Amount, Boxes ,
case when amount < 1000 then 'less than 1k'
      when amount < 5000 then 'less than 5k'
      when amount < 10000 then 'less than 10k'
      else '10k or more'
      end as 'Amount category'
from sales;


select amount ,
case when amount < 1000 then 'less than 1k'
     when amount < 5000 then 'less than 5k'
     when amount < 10000 then 'less than 10k'
     else '10k or more'
     end as 'Category'
     from sales











 
 
 