//任务集合tasks: 使用findAndModify，防止竞态问题:
db.tasks.drop();
db.tasks.insertMany([
  {taskId:1,taskName:"登录注册",state:"READY",priority:3},
  {taskId:2,taskName:"购物车",state:"RUNNING",priority:3},
  {taskId:3,taskName:"会员管理",state:"READY",priority:2},
  {taskId:4,taskName:"商品管理",state:"DONE",priority:2},
  {taskId:5,taskName:"订单管理",state:"READY",priority:3},
]);
var doc=db.tasks.findAndModify({//所有参数，都在一个大括号中
  query:{state:"READY"},//查找状态为READY的
  sort:{priority:-1},//按优先级降序排列
  update:{$set:{state:"RUNNING"}},//修改优先级最高的一个任务的状态为RUNNING
  new:true //返回修改后新文档，不写，默认返回旧文档
})//只能修改一个
printjson(doc);
