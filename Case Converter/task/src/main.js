console.log("JS работает!!!!");

/**
function getText() {
    let text = document.getElementById("textareabox").value;
    let text1 = text.toUpperCase();
    document.getElementById("textareabox").value = text1;
  //  alert(text);
}
**/

document.getElementById("upper-case").addEventListener("click", function ()  {
    let text = document.getElementById("textareabox").value;
    let text1 = text.toUpperCase();
    document.getElementById("textareabox").value = text1;
});


document.getElementById("lower-case").addEventListener("click", function ()  {
    let text = document.getElementById("textareabox").value;
    let text1 = text.toLowerCase();
    document.getElementById("textareabox").value = text1;
});



document.getElementById("proper-case").addEventListener("click", function ()  {
    let text = document.getElementById("textareabox").value;
    let text1 = text.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    document.getElementById("textareabox").value = text1;
});


function firstLetterUpper(theString) {
    var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return newString;
}


document.getElementById("sentence-case").addEventListener("click", function ()  {
    let text = document.getElementById("textareabox").value;
    let text1 = firstLetterUpper(text);
    document.getElementById("textareabox").value = text1;
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


document.getElementById("save-text-file").addEventListener("click", function ()  {
    let text = document.getElementById("textareabox").value;
    let text1 = download("text.txt" ,text);
   // document.getElementById("textareabox").value = text1;
});