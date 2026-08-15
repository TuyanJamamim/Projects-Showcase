select * from sales;
select GeoID , sum(Amount) , count(Amount) , avg(Amount) , sum(Boxes)
 from sales
  group by GeoID ;


select g.Geo , sum(Amount) , count(Amount) , avg(Amount) , sum(Boxes)
 from sales as s
 join geo as g on g.GeoID = s.GeoID
  group by Geo ; /*grouping can only be done by the first input of select like in this case it is Geo */
 
 /*grouping based on two variables */
 select p.Team, pr.Category ,sum(s.boxes) , sum(amount)
 from sales as s
 join people as p on p.SPID = s.SPID
 join products as pr on pr.PID = s.PID
 where p.team <> '' /* <> this means not equal to */
 group by p.Team, pr.Category
 order by p.Team, pr.Category;/*can also order by letter values along with numeric values8*/
 
 
 /* top 10 products and using new category as order by variable*/
 select pr.Product , sum(s.Amount) as 'Total Amount' 
 from sales as s
 join products as pr on pr.PID = s.PID
 group by pr.Product
 order by 'Total Amount' desc /*using newly names variable*/
 limit 10; /*displays only top 10 products*/
 
 
 
 
  