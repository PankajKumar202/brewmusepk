let express=require("express");
let app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const mongo=require("mongodb");
const MongoClient=mongo.MongoClient;
const mongoUrl="mongodb+srv://PankajKumar:Pankaj123@cluster0.cd60j.mongodb.net/Brewmuse?retryWrites=true&w=majority";
const dotenv=require("dotenv");
dotenv.config();
let port=process.env.PORT || 8600;
var db;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use(cors())
// get defualt /route
app.get('/',(req,res)=>{
    res.send("Welcome to Brewmuse Express");
})
//for home
app.get('/home/:id',(req,res)=>{
    let oId=mongo.ObjectId(req.params.id)
    console.log("ObjectID",oId)
    db.collection('Home').find({"_id":oId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/home',(req,res)=>{
    // let oId=mongo.ObjectId(req.params.id)
    // console.log("ObjectID",oId)
    db.collection('Home').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
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
app.get('/coffeeCat',(req,res)=>{
    db.collection('coffeefindcat').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })

})
app.get('/coffeeCat/:id',(req,res)=>{
    let finderID=Number(req.params.id);
    console.log("finderID>>>",finderID);
    db.collection('coffeefindcat').find({"finder_id":finderID}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })

})
app.get("/coffeefinder/:id",(req,res)=>{
    let finderID=Number(req.params.id);
    console.log("FinderID>>>",finderID)
    db.collection('coffeefinder').find({"finder_id":finderID}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/ourcoffee/:id',(req,res)=>{
    let optid=Number(req.params.id);
    console.log(">>>>>optid",optid);
    db.collection('ourcoffee').find({"opt_id":optid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//coffee and food categories
app.get('/category/:id',(req,res)=>{
    let categoryID=Number(req.params.id);
    console.log(">>>>categoryid",categoryID)
    db.collection('category').find({"category_id":categoryID}).toArray((err,result)=>{
        if(err) console.log(err);
        res.send(result)
    })
})
app.get('/category',(req,res)=>{
    // let categoryID=Number(req.params.id);
    // console.log(">>>>categoryid",categoryID)
    db.collection('category').find().toArray((err,result)=>{
        if(err) console.log(err);
        res.send(result)
    })
})
// coffee and food by Menu
app.get('/menu',(req,res)=>{


db.collection('Menu').find().toArray((err,result)=>{
    if(err) console.log(err)
    res.send(result);
})
})
app.get('/menu/:id',(req,res)=>{
let catID=Number(req.params.id);
console.log("Category_id>>>>>",catID)
db.collection('Menu').find({"category_id":catID}).toArray((err,result)=>{
    if(err) console.log(err)
    res.send(result);
})
})
app.get('/menuItem/:id',(req,res)=>{
    let itemID=Number(req.params.id);
    console.log("_id>>>",itemID)
    db.collection('Menu').find({"_id":itemID}).toArray((err,result)=>{
        if(err) console.log(err)
        res.send(result);
    }) 
})
// filter 
app.get('/filter',(req,res)=>{
    let categoryid=Number(req.query.category_id);
    let item_type=req.query.type;
   let sort={Ratings:1}
   let brate=Number(req.query.brate);  
    let arate=Number(req.query.arate);
 
    let query={}
    if(categoryid){
        query={category_id:categoryid}
    }
    if(sort){
        sort={Ratings:req.query.sort}
    }
    if(brate&arate){
        query={$and:[{Price:{$gt:brate,$lt:arate}}]}
    }
    if(arate){
        query={Ratings:{$gte:arate}}
    }else if(brate){
        query={Ratings:{$lte:brate}}
    }
     if(item_type){
        query={type:item_type}
    }
        db.collection('menu').find(query).sort(sort).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
// Filter for Coffee and food
// app.get('/filter',(req,res)=>{
//     let categoryid=Number(req.query.category_id);
//     let item_type=req.query.type;
//     let sort = {Ratings:1}
  
//     let arate=Number(req.query.arate);
//     let brate=Number(req.query.brate);
//     let query={}
    
//     if(brate & arate & categoryid & item_type ){
//         query={$and:[{Price:{$gt:brate,$lt:arate}}],
//             category_id:categoryid,
//             type:item_type,
//             Ratings:{$gte:arate},
//             Ratings:{$gte:arate}
//         }
//     }
//     else if(brate && arate && categoryid && item_type){
//         query={$and:[{Price:{$gt:brate,$lt:arate}}],
//         category_id:categoryid,
//         type:item_type}
//     }
//     else if(brate && arate && categoryid){
//         query={$and:[{Price:{$gt:brate,$lt:arate}}]}
//     }
//     else if(item_type && categoryid){
//         query={ 
//             category_id:categoryid,
//             type:item_type
//         }
//     }
//     else if(brate && arate){
//         query={$and:[{Price:{$gt:brate,$lt:arate}}]}
//     }
//     else if(arate){
//         query={Ratings:{$gte:arate}}
//     }
//     else if(brate){
//         query={Ratings:{$lte:brate}}
//     }
//     if(item_type){
//         query={type:item_type}
//     }
//     if(categoryid){
//         query={category_id:categoryid}
//     }
//     if(sort){
//         sort={Ratings:req.query.sort}
//     }
       
    
//     db.collection('menu').find(query).sort(sort).toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })

// })
   
       
    



// Careers wrt city keyword
app.get('/jobs',(req,res)=>{
    let cityId = Number(req.query.city_id);
    let cityname = req.query.city_name;
    let profile = req.query.profile;
    let query = {};
    if(cityId && profile){
        query = {city_id:cityId,
            profile:profile
            };
    }
    else if(cityname && profile){
        query = {city_name:cityname,
            profile:profile
        };
    }
    else if(cityId){
        query = {city_id:cityId};
    }
    else if(cityname){
        query = {city_name:cityname};
    }
    else if(profile){
        query = {profile:profile};
    }
    console.log("cityId>>>>",cityId);
    db.collection('jobs').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// Api for name animation
app.post('/name',(req,res)=>{
    db.collection('names').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

// Fetching name for animation from database
app.get('/fetchName/:id',(req,res)=>{
    let userId = mongo.ObjectId(req.params.id);
    db.collection('names').find({_id:userId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// gift cards
app.get("/giftCategory",(req,res)=>{
    
    db.collection("gift_category").find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/giftCategory/:id",(req,res)=>{
    let giftCategory=Number(req.params.id);
    console.log(">>>>giftID",giftCategory)
    db.collection("gift_category").find({"gift_id":giftCategory}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get("/cards/:id",(req,res)=>{
    let card_id=Number(req.params.id);
  
    console.log(">>>>giftID",card_id)
    db.collection('gift').find({"gift_id":card_id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);    
    })
})
// Gift card based on user's selection
app.post('/giftcard',(req,res)=>{
    console.log(req.body);
    db.collection('gift').find({_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//  placing order For Gift Cards
app.post(`/placegiftOrder`,(req,res)=>{
    
 
    db.collection('Orders_gift').insertOne(req.body,(err,result)=>{
        if(err) throw err;
        res.send("Order Added");
    })
})
// for delete Order
app.delete(`/deletegiftOrder`,(req,res)=>{
    let email=req.query.email;
    let query={}
    if(email){
        query={"email":email}
    }
    db.collection('Orders_gift').deleteOne(query,(err,result)=>{
       if(err) console.log(err)
       res.send(result)
    })
})
// Update Api
app.put('/updategiftOrder/:id',(req,res)=>{
    let oId=mongo.ObjectId(req.params.id)
    console.log(">>>_id",oId)
    let status=req.query.status?req.query.status:'Pending'
    db.collection('Orders_gift').updateOne(
        {_id:oId},
        {$set:{
                "status":status,
                "bank_name":req.body.bank_name,
                "bank_status":req.body.bank_status
            
        }},(err,result)=>{
            if(err) throw err
         
            res.send(`status updated to ${status}`);
            
        }
    )
        
    })

// ADD Route for placing order For Menu
app.post(`/placeOrder`,(req,res)=>{
    // let Oid=mongo.ObjectId(req.params.id);
 
    db.collection('ordersmenu').insertOne(req.body,'UTF-8',(err,result)=>{
        if(err) throw err;
        res.send("Order Added");
    })
})
// Menu item based on user's selection
app.post('/menuItem',(req,res)=>{
    console.log(req.body);
    db.collection('Menu').find({_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// for delete Order
app.delete(`/deleteOrder`,(req,res)=>{
    let email=req.query.email;
    let query={}
    if(email){
        query={"email":email}
    }
    db.collection('ordersmenu').deleteOne(query,(err,result)=>{
       if(err) console.log(err)
       res.send(result)
    })
})
// Update Api
app.put('/updateOrder/:id',(req,res)=>{
    let oId=mongo.ObjectId(req.params.id)
    console.log(">>>_id",oId)
    let status=req.query.status?req.query.status:'Pending'
    db.collection('ordersmenu').updateOne(
        {_id:oId},
        {$set:{
                "status":status,
                "bank_name":req.body.bank_name,
                "bank_status":req.body.bank_status
            
        }},(err,result)=>{
            if(err) throw err
         
            res.send(`status updated to ${status}`);
            
        }
    )
        
    })
MongoClient.connect(mongoUrl,(err,connection)=>{
    if(err) throw err;
    db=connection.db("Brewmuse");
    app.listen(port,()=>{
        console.log(`Listening in the port ${port}`);
    })
})



