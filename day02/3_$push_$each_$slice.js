//天气集合weather: 追加新的天气，始终只保留最新的5条
db.weather.drop();
var city={//北京的天气和气温数组
  city:"北京",
  ts:[//暂时保存周一到周五的五天气温
    {day:"星期一",t:"7~17"},
    {day:"星期二",t:"8~20"},
    {day:"星期三",t:"9~22"},
    {day:"星期四",t:"5~15"},
    {day:"星期五",t:"6~18"},
  ]
};
db.weather.insertOne(city);//将北京的天气数据保存到天气集合中
printjson(db.weather.findOne({city:"北京"}));
//周二再看:
var new_day=[//定义周六的气温，保存在一个临时的数组中
  {day:"星期六",t:"7~20"}
];//因为$slice必须和$each配合使用，而$each专门用于打散数组内容,所以，要用$slice，即使只添加一个新元素，也必须放在数组内
db.weather.updateOne(
  {city:"北京"},
  //将new_day添加到北京的ts数组中，但始终仅保留最后添加的最新的5条气温记录
//{$push:{键:{$each:数组,$slice:n}}}
// 追加       打散        选取
  {$push:{ts:{$each:new_day,$slice:-5}}}
);
printjson(db.weather.findOne({city:"北京"}).ts);
//周三再看:
new_day=[//定义周日的气温，保存在一个临时的数组中
  {day:"星期日",t:"3~12"}
];
db.weather.updateOne(
  {city:"北京"},
  //将new_day添加到北京的ts数组中，但始终仅保留最后添加的最新的5条气温记录
//{$push:{键:{$each:数组,$slice:n}}}
// 追加       打散        选取
  {$push:{ts:{$each:new_day,$slice:-5}}}
);
printjson(db.weather.findOne({city:"北京"}).ts);