let express=require("express");
let app=express();
const mongo=require("mongodb");
const MongoClient=mongo.MongoClient;
const mongoUrl="mongodb+srv://PankajKumar:Pankaj123@cluster0.cd60j.mongodb.net/Brewmuse?retryWrites=true&w=majority";
const dotenv=require("dotenv");
dotenv.config();
let port=process.env.PORT || 8600;
var db;
// get defualt /route
app.get('/',(req,res)=>{
    res.send("Welcome to Brewmuse Express");
})
// find a store 
app.get('/store',(req,res)=>{
    let city=Number(req.query.city_id);
    let cityname=req.query.city_name;
    let name=req.query.name;
    let query={};
    if(city&&cityname&&name){
        query={city_id:city,
            city_name:cityname}
    }
    else if(city){
        query={city_id:city}
    }else if(cityname){
        query={city_name:cityname}
    }else if(name){
        query={name:name}
    }
    db.collection('store').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// coffee finder api
app.get('/ourcoffee/:id',(req,res)=>{
    let optid=Number(req.params.id);
    console.log(">>>>>optid",optid);
    db.collection('ourcoffee').find({"opt_id":optid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// Menu By Coffee 
app.get('/Coffee/:id',(req,res)=>{
let categoryID=Number(req.params.id);
console.log(">>>>>categoryID",categoryID);

db.collection('coffee').find({"category_id":categoryID}).toArray((err,result)=>{
    if(err) console.log(err)
    res.send(result);
})
})
// filter for coffee
app.get('/filter',(req,res)=>{
    let item_type=req.query.type;
    let brate=Number(req.query.brate);
    let arate=Number(req.query.arate);
     if(item_type){
        query={type:item_type}
    }else if(brate){
        query={Ratings:{$lte:brate}}
       
    }else if(arate){
        query={Ratings:{$gte:arate}}
    }
    db.collection('coffee').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})


// Careers wrt city keyword
app.get('/jobs',(req,res)=>{
    let cityId = Number(req.query.city_id);
    // let cityname = req.query.cityname;
    let query = {};
    console.log("cityId>>>>",cityId);
    if(cityId){
        query = {
            city_id:cityId,
            // city_name:cityname
        };
    }
    // else if(cityId){
    //     query = {city_id:cityId};
    // }
    // else if(cityname){
    //     query = {city_name:cityname};
    // }

    db.collection('jobs').find(query).toArray((err,result)=>{
        if(err) throw err
        res.send(result);
    })
})


MongoClient.connect(mongoUrl,(err,connection)=>{
    if(err) throw err;
    db=connection.db("Brewmuse");
    app.listen(port,()=>{
        console.log(`Listening in the port ${port}`);
    })
})

