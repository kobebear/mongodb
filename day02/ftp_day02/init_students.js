db.students.drop();
db.students.insert([
    {uid: 1, uname: "HanMM", scores: [
    	{ course: "eng", score: 65, comment: "level 4" },
	{ course: "chs", score: 70},
	{ course: "math", score: 85}
    ] },  
    {uid: 2, uname: "Lucy", scores: [
	{ course: "eng", score: 90, comment: "level 4" }, 
	{ course: "chs", score: 75 }, 
	{ course: "math", score: 60 } 
    ] },  
    {uid: 3, uname: "Lily", scores: [ 
	{ course: "eng", score: 70, comment: "level 4" }, 
	{ course: "chs", score: 65 },
        { course: "math", score:80 }
    ] },
    {uid:4,uname:"lilei",scores:[     
        {course:"eng",score:75,comment:"level 4"},     
        {course:"chs",score:80},     
        {course:"math",score:65}  
    ]}
]); 
