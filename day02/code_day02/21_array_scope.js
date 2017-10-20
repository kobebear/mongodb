db.scores.drop();
db.scores.insert([
  {score:85},
  {score:75},
  {score:[65,90]},
  {score:95},
  {score:[85,75]},
  {score:[80,70]}
])
db.scores.find({score:{$gte:60,$lt:70}});
db.scores.find({score:{$gte:70,$lt:80}});
db.scores.find({score:{$elemMatch:{$gte:70,$lt:80}}})
db.scores.ensureIndex({score:1});
db.scores.find().min({score:70}).max({score:80})