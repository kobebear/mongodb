for(var i=1,cs=[];i<24;i++){

  cs.push({

    user:"user"+parseInt(Math.random()*10+1),

    content:"顶我上"+i+"楼" 

  })    

}

db.posts.update({},{$push:{comments:{$each:cs}}});

db.posts.findOne(

  {},{comments:{$slice:5},_id:0,pid:0,uid:0,content:0}

).comments;

db.posts.findOne(

  {},{comments:{$slice:-5},_id:0,pid:0,uid:0,content:0}

).comments;