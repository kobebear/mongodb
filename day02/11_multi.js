//db.products.update({},{$inc:{count:10}});
//db.products.update({},{$inc:{count:10}},false,true);
//db.products.updateOne({},{$inc:{count:10}});
db.products.updateMany({},{$inc:{count:10}});
printjson(db.products.find().toArray());