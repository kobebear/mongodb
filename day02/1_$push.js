//文章列表集合articles：向一篇文章中追加一条评论
db.articles.drop();//删除现有文章列表集合articles
var article={//冬冬发布一篇新文章
  title:"诗",
  content:"日日思君不见君",
  author:"冬冬",
  createdDate:new Date(),
  comments:[]  //数组类型键
}
var result=db.articles.insertOne(article);//将冬冬的新文章添加到articles集合
printjson(result);//查看insertOne返回的结果对象内容
var comment1={user:"旭旭",content:"日日是谁？"};//大旭针对冬冬的文章发表一条评论
db.articles.updateOne(
  {_id:result.insertedId}, //先用插入后返回的_id查询冬冬刚发布的文章
  //将大旭的评论comment1，追加到数组类型键comments中,格式如下:
  //{$操作:{ 键    :   值}}
  {$push:{comments:comment1}}
);
var comment2={user:"明明",content:"我想静静"};//明明针对冬冬的文章发表一条评论
db.articles.updateOne(
  {_id:result.insertedId},
  //将明明的评论comment2，追加到数组类型键comments中,格式如下:
//{$操作:{ 键    :   值}}
  {$push:{comments:comment2}}
);
printjson(db.articles.findOne({_id:result.insertedId}));