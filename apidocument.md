Landing page => No required Api to fetch data dynamically (only weather api).
Find a Store => geolocation Api and store location w.r.t user location / By city.
Menu => Coffee name and its image w.r.t its category (Coffee/Food)
Careers=> Jobs w.r.t city/Keyword.
Rewards=> Gift Cards(Api) and Rewards.
Starbucks Delivers => Menu Api  and geolocation.
                    =>Add to cart.
                    =>Buy now.
>>>Page 1
>>>Find a store
>>>#working
>>>local links
find a store data = http://localhost:4879/store
find a store wrt cityid [for using in map]= http://localhost:4879/store?city_id=2
find a store wrt cityname[for using in search bar]=http://localhost:4879/store?city_name=Delhi
find a store wrt name[for using in search bar]=http://localhost:4879/store?name=Punjabi Bagh
>>>heroku links


>>>Page 2 Menu
>>>keynote=the api fetch all data from coffee as well as food.we can take data as per our convenience using jsp by fetch call.
>>>#working
>>>local links
Menu data of coffee & food wrt to its category e.g featured beverage n all =localhost:4879/item/2

>>>heroku links

>>>Coffee finder
>>>working
>>>local links
http://localhost:4879/ourcoffee/8
http://localhost:4879/ourcoffee/9
http://localhost:4879/ourcoffee/10
>>>heroku links

>>>page 5 {Starbucks delivers }
>>>Menu  Data  wrt category
>>> Working
>>>local links
Menu data of coffee wrt to its category e.g featured beverage n all =http://localhost:4879/Coffee/3
Menu data of food wrt to its category e.g featured beverage n all =
offers api
add store api delivery time cost for two Ratings:
>>>heroku links

>>>Careers
Page 3: Working local links Jobs w.r.t CityId, Cityname, 
Keyword = http://localhost:4879/jobs?city_id=2&profile=Barista 
Jobs w.r.t Cityid = http://localhost:4879/jobs?city_id=2 
Jobs w.r.t CityName = http://localhost:4879/jobs?city_name=Delhi 
Jobs w.r.t Keyword/Profile = http://localhost:4879/jobs?profile=Apprentice

>>>careers ends

>>>filters
>>> Working
>>>local links
>>>Type=veg/nonveg
http://localhost:4879/filter?type=Vegetarian
>>>Price like less than and greater than equal to 300
for below 300 = http://localhost:4879/filter?bprice=300
for above 300 = http://localhost:4879/filter?aprice=300
>>>>Sort of rating from loq to high and vice versa
it would by default in ascending order localhost:4879/filter/1?Ratings
but in descending order localhost:4879/filter.sort=-1 

<!-- rewards -->
gift cards
#working
Local link =localhost:4879/cards/2



<!-- for placing Order For Menu -->
Local link=http://localhost:4879/placeOrder
<!-- For Deleting Order for Menu -->
local link=http://localhost:4879/deleteOrder
<!-- For Updating Order For Menu -->
local link=http://localhost:4879/updateOrder/62095d8f759853d128db2c49?status=Success

<!-- for placing gift cards -->
local link=http://localhost:4879/placegiftOrder
<!-- for deleting Order -->
local link="http://localhost:4879//deletegiftOrder"
<!-- for Updating Order -->
local link=http://localhost:4879/updategiftOrder/62096056d7e9477ae6100660?status=Success

















