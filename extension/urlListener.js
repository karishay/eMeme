// """Background page interacts with the browser page. Functions with 
// jQuery must bewritten in the content script and called in the 
// background."""
// When the browser is launched, create a listener to know 
// when a new tab or window is opened. Then display extension icon. 

//TODO: what does changeInfo do and do I need it?
function isUrlGmail(tabId, changeInfo, tab){
    console.log("I'm in your browser browsing your brow...sing?");
    if (tab.url.indexOf('mail.google.com')> -1){
        chrome.pageAction.show(tabId);
    }
};
// listen for url changes on any tab.
chrome.tabs.onUpdated.addListener(isUrlGmail);


// this is the call back function for the onClicked event
// it tells you that your event listener is working. 
// perhaps this is where I can add functionality later
function onClickHandler(info, tab) {
    if(info.menuItemId == "analyze text" || info.menuItemId == "generate meme response"){
        console.log("You have selected the " + info.menuItemId + " context menu item");
    } else {
        console.log("item " + info.menuItemId + " was clicked");
        console.log("info: " + JSON.stringify(info));
        console.log("tab is: " + JSON.stringify(tab));
    }
};

chrome.contextMenu.onClicked.addListener(onClickHandler);

// set up the context menu tree when installed
chrome.runtime.onInstalled.addListener(function() {
    //create a context menu item
    var seletionContext = ["selection"];
    var title = "Analyze this " + seletionContext + " of text"
    var id = chrome.contextMenus.create({"title": title, "contexts":[selectionContext],
                                         "id": "context" + selectionContext});
    console.log("I am logging because my context listener is working!");

    //create a parent context menu item.
    chrome.contextMenus.create({"title": "Test"})
})


//make a function to collect the selected text
// try something like this (tested and works in console)
// The onClicked callback function:
function onClickHandler(info, tab) {
  document.getElementsByTagName('body')[0].innerHTML+= info.selectionText;
  console.log(info.selectionText)
};


chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["page","selection","link","editable","image","video",
                  "audio"];
  var id = chrome.contextMenus.create({"title": "This is the title for my context Menu that listens to selections",
                                        "contexts": [contexts[1]],"id": "parent"});

});

//TODO: either rebuild this or get it working better. it works in the console, 
//but not in the extension. See if it's related to background page vs content script

// function isReplyBoxOpen(){
//     var pants = $('.editable');
//     console.log(pants);
//     if ($('.editable').length > 1){
//         console.log("Yep, your reply box is open.");
//         pants.innerHTML = '<img onload="src="https://images.nga.gov/?service=asset&action=show_preview&asset=19750">'

//     }else{
//         console.log("nope, not working.")
//     }
// };
// chrome.tabs.onClicked.addListener(isReplyBoxOpen);

