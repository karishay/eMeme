//fix from stack overflow to get f-ing content script to not be lazy
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"contentScript.js"});
});
//this function checks if you are on gmail and displays eMeme icon in browser bar
function isUrlGmail(tabId, changeInfo, tab){
    console.log("I'm in your browser browsing your brow...sing?");
    if (tab.url.indexOf('mail.google.com')> -1){
        chrome.pageAction.show(tabId);
    }
};
// listen for url changes on any tab.
chrome.tabs.onUpdated.addListener(isUrlGmail);



chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["page","selection","link","editable","image","video",
                  "audio"];
  var id = chrome.contextMenus.create({"title": "Click on me to log your selection!",
                                        "contexts": [contexts[1]],"id": "parent"});

});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log(message);
    sendResponse("background sees that the reply box had been opened");
});



////////////////////////////////////////////////////////////////////////////////
//////////////////// Extentsion functionality Here /////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//This function logs the selected text upon clicking the context menu item
function onClickHandler(info, tab) {
  return chrome.runtime.sendMessage(info.selectionText);
};

// this function sends the selected text to the server
function sendSelectionToServer(){
  return "<img src='http://graphics8.nytimes.com/images/2013/10/27/magazine/27economy/mag-27Economy-t_CA0-articleLarge.jpg'>"
};














