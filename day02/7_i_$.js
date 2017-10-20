//演员集合actors: 分别根据演员的出场顺序下标和演员的姓名为其投票
db.actors.drop();
//定义第一组演员的出场顺序:
var group1={
  group:1,
  players:[
    {name:"宋小宝",count:0},
    {name:"文松",count:0},
    {name:"赵四",count:0},
    {name:"刘能",count:0},
  ]
}
db.actors.insertOne(group1);//保存第一组的演员到集合
db.actors.updateOne(//为第一组第一个出场的演员投票count+1
  {group:1},//第一组
//{$inc:{"数组键.下标.数值键": n}}
//数量加减:
  {$inc:{"players.0.count":1}}
);
printjson(db.actors.findOne({group:1}).players);
db.actors.updateOne({group:1},{$inc:{"players.2.count":1}});
db.actors.updateOne({group:1},{$inc:{"players.1.count":1}});
db.actors.updateOne({group:1},{$inc:{"players.2.count":1}});
db.actors.updateOne({group:1},{$inc:{"players.0.count":1}});
db.actors.updateOne({group:1},{$inc:{"players.3.count":1}});
printjson(db.actors.findOne({group:1}).players);
//问题: 序号容易搞错，但人名不会记错
//解决: 按人名查找并投票
//定义唱票的人名列表(唱票时，一个人可能被反复投标，所以名字可以重复)
var name_list=["宋小宝","赵四","文松","赵四","宋小宝","刘能"];
//遍历人名列表，
for(var i=0;i<name_list.length;i++){
   db.actors.updateOne(
     //找到players数组中内嵌文档的name键值为当前人名的人
    {group:1,"players.name":name_list[i]},
     //为players数组中，当前找到的内嵌文档的count+1
    {$inc:{"players.$.count":1}}//$可自动获得当前找到的内嵌文档的下标位置
   )
}
printjson(db.actors.findOne({group:1}).players);