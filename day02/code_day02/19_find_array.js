db.users.find({favorites:"游泳"});

db.users.find({favorites:"跑步",favorites:"旅游"});

db.users.find({"favorites.0":"跑步"});

db.users.find({favorites:{$in:["跑步","旅游"]}});

db.users.find({favorites:{$all:["跑步","旅游"]}})



