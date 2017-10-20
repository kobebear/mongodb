db.products.find({createdDate:{$lt:new Date("2016/1/1")}});
db.products.find({count:{$gte:30,$lte:50}})