// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let body = document.getElementById("body");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
  // tabs.create('http://www.google.com')
  // let newDiv = document.createElement('link');
  // newDiv.innerText = 'http://www.google.com';
  // body.appendChild(newDiv);



});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  let newDiv = document.createElement('link');
  newDiv.innerText = 'http://www.google.com';
  body.appendChild(newDiv);
  console.log(body)
  }


  // function setPageBackgroundColor() {
  //   const head = document.querySelector('head');
  //   head.innerHTML = `<meta http-equiv="refresh" content="0; URL=https://www.google.com/" />`
  // }

  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }

