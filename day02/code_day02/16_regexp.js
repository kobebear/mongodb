db.posts.drop();

db.posts.insert([

  {name:"冬冬",content:"xxx 微信 xxx"},

  {name:"冬冬",content:"xxx 微 信 xxx"},

  {name:"冬冬",content:"xxx WeiXin xxx"},

  {name:"冬冬",content:"xxx w x xxx"},

  {name:"冬冬",content:"xxx wechat xxx"}

]);

db.posts.find({content:/(微|w(ei)?)\s*(信|x(in)?)/i});