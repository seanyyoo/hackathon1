
const body = document.querySelector('body');
console.log(body)
body.addEventListener("click", function () {
  if (document.getSelection) {
  console.log(document.getSelection().toString())
  let cache = document.getSelection().toString()
  return document.getSelection().toString();
  }
});


console.log('hello')


//////////////////


