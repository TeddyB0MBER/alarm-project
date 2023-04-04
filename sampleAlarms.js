// Select the database to use.
use('mongodbVSCodePlaygroundDB');


// Insert sample alarms into the collection
db.getCollection('sales').insertMany([
    {_id:0,"userName":"XYZ","alarmname":"morningRush",time:530,"ring":"Nomercyforyou"},
    {_id:1,"userName":"XYZ","alarmname":"morningRush",time:630,"ring":"Nomercyforyou"},
    {_id:2,"userName":"XYZ","alarmname":"morningRush",time:730,"ring":"Nomercyforyou"},
    {_id:3,"userName":"XYZ","alarmname":"morningRush",time:830,"ring":"Nomercyforyou"},
    {_id:4,"userName":"XYZ","alarmname":"morningRush",time:930,"ring":"Nomercyforyou"}
]);

