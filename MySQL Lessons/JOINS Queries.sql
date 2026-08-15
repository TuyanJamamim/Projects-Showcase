/* JOINS Query */

select * from sales;

select * from people;

select s.SaleDate , s.Amount , p.Salesperson , s.SPID, p.SPID
 from sales as s /* here sales table is named as s */
 join people as p on p.SPID = s.SPID;
 
 /* Left Join */
 select s.SaleDate, s.Amount, pr.Product
 from sales as s
 left join products as pr on pr.PID = s.pid; /* left join preserves the data on the left table and even if there are no mathicng value between tables it still works */
 
/* Adding two Joins together */
select s.Amount, p.Salesperson , s.SPID , pr.Product
 from sales as s
join people as p on p.SPID = s.SPID
join products as pr on pr.PID = s. PID;

/* Adding conditions to join operation */
select s.Amount, p.Salesperson , s.SPID , pr.Product
 from sales as s
join people as p on p.SPID = s.SPID
join products as pr on pr.PID = s. PID
where s.Amount > 5000
order by s.Amount;

/* Adding multiple conditions to join operation */
select s.Amount, p.Salesperson , s.SPID , pr.Product, p.Team
 from sales as s
join people as p on p.SPID = s.SPID
join products as pr on pr.PID = s. PID
where s.Amount < 5000
and p.Team = 'Delish';

select s.Amount, p.Salesperson , s.SPID , pr.Product, p.Team
 from sales as s
join people as p on p.SPID = s.SPID
join products as pr on pr.PID = s. PID
where s.Amount < 5000
/*and p.Team is null         ...This wont work because in the people table there are no null value..in stead it has empty value..this is one of the nuances of database */
and p.Team = ''; /* for salespersons who are not attached in any team */


select s.Amount , p.Salesperson , pr.Product , g.Geo , s.SaleDate
from sales as s
join people as p on p.SPID = s.SPID
join products as pr on pr.PID = s.PID
join geo as g on g.GeoID = s.GeoID
where s.Amount < 5000
and p.Team = ''
and g.Geo in ('New Zealand' , 'India')
order by SaleDate;