//酒店集合hotel: 多人同时入住，也能让每人分开住单间
db.hotel.drop();
var f1={ f:1, rooms:[] }; //定义一楼f1对象，保存一楼的所有房间数组
db.hotel.insertOne(f1);//将一楼加入到酒店集合hotel中
var u1={user:"文华"};//第一个人
db.hotel.updateOne(//入住第一层第一间房
  {f:1},
  {$push:{rooms:u1}}
);
printjson(db.hotel.findOne({f:1}).rooms);
var users=[//又来两个人
  {user:"大旭"},{user:"冬冬"}
];
db.hotel.updateOne(//入住第一层
  {f:1},
  //{$push:{rooms:users}}//不用$each，直接push，结果，住套间
//{$push:{键  : {$each:数组}}}
// 追加          打散
  {$push:{rooms:{$each:users}}}//先用$each打散，再分别$push追加到rooms数组
);
//总结： 任意一对儿操作符与内容，或键与值，都要用{}包裹，且都要用:分割
//{$操作:内容}  {键:值}
printjson(db.hotel.findOne({f:1}).rooms);
