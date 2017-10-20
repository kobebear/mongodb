db.students.find({scores:{course:"eng",score:{$gt:70}}});
db.students.find({"scores.course":"eng","scores.score":{$gt:70}});
db.students.find({scores:{$elemMatch:{course:"eng",score:{$gt:70}}}})