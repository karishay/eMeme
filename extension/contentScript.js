var port = chrome.runtime.connect();
console.log("Your content script is here, mwhahahah!")

var bodyTest = document.getElementsByTagName('body')[0];

var replyBox = document.getElementsByClassName("editable")[0];



////////////////////////////////////////////////////////////////////////////////
//////////////////// This is the page setup area ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var intervalCheck = setInterval(findReplyLink, 1000);

function findReplyLink(){
    console.log("finding your reply link, maaaam");
    var replyLink = document.getElementsByClassName("ams")[0];
    if (replyLink) {
        pageSetup(replyLink);
        clearInterval(intervalCheck);
    }
}

function pageSetup(replyLink){
    console.log("pageSetup is running.");
    replyLink.addEventListener("click", function(event){ 
        chrome.runtime.sendMessage("reply box ready");
        chrome.runtime.onMessage.addListener(
            function(message, sender, sendResponse) {
                console.log(message);
            })
    });
}

////////////////////////////////////////////////////////////////////////////////
//////////////////// End of page setup area ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
























