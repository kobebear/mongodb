db.products.find({pname:{$in:["iphone6","iphone6plus"]}});
db.products.find({
    pname:{
        $not:{
            $in:["iphone6","iphone6plus"]
        }
    }
});
db.products.find({pname:{$nin:["iphone6","iphone6plus"]}});
db.products.find({$or:[
  {count:{$gt:50}},
  {count:{$lt:30}}
]})
db.tasks.find({state:{$not:{$eq:"READY"}}});
db.tasks.find({state:{$ne:"READY"}});