const gtts = require ('gtts');
let speech = "Hello, This is Md.Soliman Ali";
let GTTS = new gtts (speech, 'en');

GTTS.save ('speech.mp3', (err, result)=>
{
    if (err)
    {
        throw err;
    }
    else
    {
        console.log("Done");
    }
})