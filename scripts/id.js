
var input = require('./id.json');
function addElement () {
    for (i in idJson.platform){
       var idLine = document.createElement("li");
        var idA = document.createElement("a");
        idA.setAttribute("href","#");
        var content = document.createTextNode(idJson.platform[i]);
        idA.appendChild(content);
        idLine.appendChild(idA);
        document.getElementById("drink").appendChild(idLine);
    }
}

document.body.onload = addElement;
