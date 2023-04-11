use('wakeuppal')


// Insert sample alarms into the collection
/*db.alarms.insertMany([
    {_id:855,"username":"XYZ","alarmname":"morningRush",time:530,"ring":"Nomercyforyou"},
    {_id:923,"username":"XYZ","alarmname":"morningRush",time:630,"ring":"Nomercyforyou"},
    {_id:734,"username":"XYZ","alarmname":"morningRush",time:730,"ring":"Nomercyforyou"},
    {_id:356,"username":"XYZ","alarmname":"morningRush",time:830,"ring":"Nomercyforyou"},
    {_id:443,"username":"Pop","alarmname":"morningRush",time:930,"ring":"Nomercyforyou"},
    {_id:567,"username":"XYZ","alarmname":"morningRush",time:1030,"ring":"Nomercyforyou"},
]);*/

/*db.alarms.find({'username:': 'Pops'})*/

//db.alarms.updateOne({"_id": (567)}, {$set: { "new_alarmname" : "youarelate"}})

db.alarms.deleteOne({ "userName": "XYZ" })
