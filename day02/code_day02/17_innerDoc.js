db.users.find({

    address:{city:"北京",street:"万寿路"}//完整文档匹配: 键值，键名，键顺序，键个数要完全匹配

})

db.users.find({//每个键独立匹配，和文档的键无关

    "address.city":"北京",

    "address.street":"万寿路"

})