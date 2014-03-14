"""Background page interacts with the browser page. Functions with 
jQuery must bewritten in the content script and called in the 
background."""
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

// function ted (argument) {
//     console.log("Hey, Im ted!");
// };

// locate the reply box on the page
// search the dom for the div id:":ol"