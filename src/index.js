import _ from 'lodash';
import '../identity/assets/sass/main.scss';

const idJsonData = require('./id.json');
console.log('This is id JS')

function addId(listNum){
    let idA = document.createElement("a");
    idA.setAttribute("href","#");

    let content = document.createTextNode(idJsonData.platform[listNum]);
    idA.appendChild(content);

    let idLine = document.createElement("li");
    idLine.appendChild(idA);
    return idLine;
}

function title(){
    const element = document.createElement('h1');
    element.innerHTML = "This is message";
    element.classList.add('body');
    return element;
}

document.body.appendChild(title());

for(let index in idJsonData.platform){
        document.body.appendChild(addId(index));
    }   

