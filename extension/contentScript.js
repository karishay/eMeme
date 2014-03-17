var port = chrome.runtime.connect();
console.log("Your sontext script is here, mwhahahah!")

var bodyTest = document.getElementsByTagName('body')[0];
var replyLink = document.getElementsByClassName("ams")[0];
var replyBox = document.getElementsByClassName("editable")[0];

//event listener to listen to link 
// if link
// event listener for editable on click of link
replyLink.addEventListener("click", function(event){ 
    console.log("Yay, clicked on the reply link");
});

// add an if statements
//only add event listener if ams (replyLink does not exist)
if (replyLink){
    replyBox.addEventListener("click", function() {
        console.log("I'm clicking in your reply box!");

    }, false);
} else {
    console.log("I'm not seeing that reply link, bro.");
}
// 



//Im not sure this is the function I want to use
//chrome.runtime.onMessage.addListener()
//it could also be this function maybe?
//chrome.tabs.executeScript({{tab id integer}}, {{injectDetails(details of script to run)}}, {{optional function callback}})

//TODO NOW: read this http://developer.chrome.com/extensions/manifest/externally_connectable
// learn how to wire background and content page together.
