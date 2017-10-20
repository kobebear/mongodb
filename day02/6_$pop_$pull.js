//员工的工作项集合workitems: 员工按指定顺序，从自己的任务列表数组中，选择任务执行
db.workitems.drop();
//定义员工eric的任务列表:
var eric={
  name:"eric",
  tasks:["登录","商品类别管理","商品管理","购物车"]
}
db.workitems.insertOne(eric);//保存eric的任务到workitems集合
db.workitems.updateOne(//删除开头的第一个元素
  {name:"eric"},
//{$pop:{键: 1/-1}}
// 弹出     结尾/开头
  {$pop:{tasks:-1}}
);
printjson(db.workitems.findOne({name:"eric"}).tasks);
db.workitems.update(//末尾追加一个新任务
  {name:"eric"},
//{$push:{键:   值 }}
//  追加
  {$push:{tasks:"角色管理"}}
)
printjson(db.workitems.findOne({name:"eric"}).tasks)
db.workitems.update(//根据元素内容，删除数组中指定元素
  {name:"eric"},
//{$pull:{键:   元素内容}}
  {$pull:{tasks:"商品管理"}}
);
printjson(db.workitems.findOne({name:"eric"}).tasks)