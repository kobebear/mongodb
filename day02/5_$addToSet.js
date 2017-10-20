//销售人员集合sales: 向某个销售支持的城市列表中添加新城市，始终保持城市名不重复添加
db.sales.drop();
//定义销售人员rose，暂时仅负责北京，天津，上海三个城市
var rose={name:"rose",cities:["北京","天津","上海"]};
db.sales.insertOne(rose);//将rose的信息保存到sales集合
//用$addToSet代替$push，以数据集方式，只有城市名不存在时，才添加到销售人员的城市数组中
db.sales.updateOne(
  {name:"rose"},
//{$addToSet:{键:    值}}
//添加到数据集
  {$addToSet:{cities:"重庆"}}
)
printjson(db.sales.findOne({name:"rose"}).cities);
db.sales.updateOne(
  {name:"rose"},
  {$addToSet:{cities:"天津"}}
)
printjson(db.sales.findOne({name:"rose"}).cities);
//既然$addToSet顶替的是$push,那么都可用$each同时追加多个元素
var cities=["上海","武汉","长沙","重庆"];
db.sales.updateOne(
  {name:"rose"},
//{$addToSet:{ 键:   {$each: 数组}}}
//添加到数据集        打散
  {$addToSet:{cities:{$each:cities}}}
)
printjson(db.sales.findOne({name:"rose"}).cities);