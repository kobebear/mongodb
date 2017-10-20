//先手动删除products集合，再模拟竞态问题
//db.products.drop();
//假设商场仓库进货: 如果已经有该商品了，就数量增加，如果暂时还没有该商品，就添加该商品，并初始化数量:
//假设，商场进货了6部iphone8:
var iphone8={pname:"iphone8",count:6};
//先尝试查找现在有没有
if(db.products.findOne({pname:"iphone8"})==null) {//如果没找到
  sleep(5000);//停顿5秒，再做下次操作
  db.products.insertOne(iphone8);//就新建商品iphone8
}else {//否则，修改现有文档的count+新增数量
  sleep(5000);//停顿5秒，再做下次操作
  db.products.updateOne({pname: iphone8.pname}, {$inc: {count: iphone8.count}})
}
printjson(db.products.findOne({pname:iphone8.pname}));

//一句话避免竞态问题:
//db.products.updateOne(
//  {pname:iphone8.pname},
//  {$inc:{count:iphone8.count}},
//  { upsert: true }
//);
