//Website Vision
Landing page => No required Api to fetch data dynamically (only weather api).
Find a Store => geolocation Api and store location w.r.t user location / By city.
Menu => Coffee name and its image w.r.t its category (Coffee/Food)
Careers=> Jobs w.r.t city/Keyword.
Rewards=> Gift Cards(Api) and Rewards.
Starbucks Delivers => Menu Api  and geolocation.
                    =>Add to cart.
                    =>Buy now.
<!-- Start -->
Main Link: https://brewmusepk.herokuapp.com/

Page 1: Find a Store

Data to find a store: https://brewmusepk.herokuapp.com/store

Data to find a store w.r.t cityId (for using in map): https://brewmusepk.herokuapp.com/store?city_id=2

Data to find a store w.r.t cityname (for using in search bar): https://brewmusepk.herokuapp.com/store?city_name=Delhi

Data to find a store w.r.t store name (for using in search bar): https://brewmusepk.herokuapp.com/store?name=Punjabi%20Bagh

Page 2: Menu (Fetches data for coffee as well as food)
<<<<<<< HEAD
all categories http://localhost:4879/category
specific category wrt to category id http://localhost:4879/category/1 
Menu data : https://brewmusepk.herokuapp.com/Menu
=======
<<<<<<< HEAD
all categories http://localhost:4879/category
specific category wrt to category id http://localhost:4879/category/1 
Menu data : https://brewmusepk.herokuapp.com/Menu
=======
all categories : https://brewmusepk.herokuapp.com/category
category wrt category id:https://brewmusepk.herokuapp.com/category/2
Menu data w.r.t category id: https://brewmusepk.herokuapp.com/item/2
>>>>>>> 4133c5e0bc0f09c7fa909a3b822601b6bb8be152
>>>>>>> 664c0b40886235376b531256e1350b21105d8a63

Page 3: Careers

Jobs w.r.t CityId and Keyword/Profile: https://brewmusepk.herokuapp.com/jobs?city_id=2&profile=Barista
Jobs w.r.t Cityname and Keyword: https://brewmusepk.herokuapp.com/jobs?city_name=Pune&profile=Barista

Jobs w.r.t CityId: https://brewmusepk.herokuapp.com/jobs?city_id=4
Jobs w.r.t CityName:https://brewmusepk.herokuapp.com/jobs?city_name=Delhi

Jobs w.r.t Keyword/Profile: https://brewmusepk.herokuapp.com/jobs?profile=Apprentice

Api for name animation (Post Call): https://brewmusepk.herokuapp.com/name

Fetching name for animation: https://brewmusepk.herokuapp.com/fetchName/620a86a761236b3d86c70509


Page 4: Coffee finder

Combinations of coffee for coffee finder: https://brewmusepk.herokuapp.com/ourcoffee/8

Page 5: Starbucks Delivers

Filter

For Type (veg/Non-Veg):https://brewmusepk.herokuapp.com/filter?type=Non-Vegetarian 
for categories:https://brewmusepk.herokuapp.com/filter?category_id=1

For Price: https://brewmusepk.herokuapp.com/filter?bprice=200&aprice=350

For Ratings:https://brewmusepk.herokuapp.com/filter?arate=4 https://brewmuse.herokuapp.com/filter?brate=4

To place order (Post Call): https://brewmusepk.herokuapp.com/placeOrder

Menu item based on user's selection (Post Call): https://brewmusepk.herokuapp.com/menuItem

Update Order (Put Call): https://brewmusepk.herokuapp.com/updateOrder/62095d8f759853d128db2c49?status=Success

Delete Order: https://brewmusepk.herokuapp.com/deleteOrder

Page 6: Rewards

List of gift cards:https://brewmusepk.herokuapp.com/cards/1

Gift card based on user's selection (Post Call): https://brewmusepk.herokuapp.com/giftcard

Placing Order for gift cards (Post Call): https://brewmusepk.herokuapp.com/placegiftOrder

Updating Order for gift cards (Put Call): https://brewmusepk.herokuapp.com/updategiftOrder/62096056d7e9477ae6100660?status=SUCCESS

Delete Orders for gift cards: https://brewmusepk.herokuapp.com/deletegiftOrder

















