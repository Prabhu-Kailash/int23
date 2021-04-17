console.log("Hello World")

let button = document.querySelector("#copy");
let button2 = document.querySelector("#copy_btn");

let Lbutton = document.querySelector("#copy1");
let Lbutton2 = document.querySelector("#copy_btn1");

button2.addEventListener('click', function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "run"});
    });

})

Lbutton2.addEventListener('click', function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "Die"});
    });

})

button.addEventListener('click', function(){

    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    let paragraph = document.createElement("table");
    paragraph.id = "tablecreated"
    paragraph.className = "offscreen"
    paragraph.innerHTML = word;
    document.body.appendChild(paragraph)
    let val = document.querySelector('#tablecreated');
    let range = document.createRange();
    range.selectNode(val);  
    window.getSelection().addRange(range);
    document.execCommand('copy');

}, false);

Lbutton.addEventListener('click', function(){

    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    let paragraph = document.createElement("table");
    paragraph.id = "tablecreated"
    paragraph.className = "offscreen"
    paragraph.innerHTML = word;
    document.body.appendChild(paragraph)
    let val = document.querySelector('#tablecreated');
    let range = document.createRange();
    range.selectNode(val);  
    window.getSelection().addRange(range);
    document.execCommand('copy');

}, false);


