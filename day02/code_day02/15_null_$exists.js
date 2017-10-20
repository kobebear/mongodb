db.posts.drop();

db.posts.insert([

  {name:"旭旭",content:"床前明月光",comments:null},

  {name:"冬冬",content:"日照香炉生紫烟"}

])

db.posts.find({comments:null});

db.posts.find({comments:{$eq:null,$exists:true}})