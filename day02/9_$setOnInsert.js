//商品集合products: upsert操作时，补充缺少的列
db.products.drop();
db.products.insert([
  {pname:"iphone7",count:20,createdDate:new Date("2015/1/20")},
  {pname:"iphone7plus",count:30,createdDate:new Date("2015/6/12")},
])
var arr=[
  {pname:"iphone7", count:10},
  {pname:"iphone7plus",count:25},
  {pname:"iphonese",count:50}
];
for(var p of arr){
  db.products.updateOne(
    {pname:p.pname},
    {
        $inc:{count:p.count},
        $setOnInsert:{createdDate:new Date()}
    },
    { upsert: true }
  )
}
printjson(db.products.find().toArray());