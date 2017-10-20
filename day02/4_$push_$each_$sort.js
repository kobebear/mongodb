//运动员集合players: 始终仅保留运动员bolt的最好的三个成绩记录
db.players.drop();
var bolt={name:"Bolt",records:[9.72,9.76,10.03]};//初始化bolt目前最快的三个记录
db.players.insertOne(bolt);
var new_rec=[9.58]; //因为$sort也必须和$each配合使用，所以，即使只添加一个元素，也必须放在数组中加入。
db.players.updateOne(
  {name:"Bolt"},//为bolt
  //的记录数组records，追加一个新记录元素，再升序排序，最后选取前3个
//{$push:{键:     {$each:内容  ,$sort:1,$slice:3}}}
  {$push:{records:{$each:new_rec,$sort:1,$slice:3}}}
);
printjson(db.players.findOne({name:"Bolt"}).records);
//再尝试添加一个新记录:
new_rec=[9.69];
db.players.updateOne(
  {name:"Bolt"},
  {$push:{records:{$each:new_rec,$sort:1,$slice:3}}}
);
printjson(db.players.findOne({name:"Bolt"}).records);
