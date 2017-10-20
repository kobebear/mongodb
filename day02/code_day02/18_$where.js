db.students.find({$where:function(){
  var math,chs;
  for(var i=0;i<this.scores.length;i++){
    if(this.scores[i].course=="math")
      math=this.scores[i].score;
    if(this.scores[i].course=="chs")
      chs=this.scores[i].score;
  }
  if(math>chs) return true;
}})