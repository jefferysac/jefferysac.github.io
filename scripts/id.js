document.body.onload = addElement;

function addElement () {
    var id = document.createElement("a");
    id.setAttribute("href","#");
    var content = document.createTextNode("beer");
    id.appendChild(content);
    document.getElementById("drink").appendChild(id);
}
