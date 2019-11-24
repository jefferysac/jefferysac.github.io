import _ from 'lodash';
import '../identity/assets/sass/main.scss';

const idJsonData = require('./id.json');

function addId(idNode){
    let idA = document.createElement("a");
    idA.setAttribute("href","#");
    idA.setAttribute("class","fa-"+idNode);

    let content = document.createTextNode(idNode);
    idA.appendChild(content);

    let idLine = document.createElement("li");
    idLine.appendChild(idA);
    return idLine;
}

function title(){
    const element = document.createElement('h1');
    element.innerHTML = "Jefferysac";
    element.classList.add('body');
    return element;
}

// let avatarTitle = document.querySelector(".avatar")
// document.body.appendChild(title());

const idItem = idJsonData.platform;
const snsIcons = document.querySelector(".icons");

for(let index in idItem){
    console.log(index);
    snsIcons.appendChild(addId(idItem[index]));
    }   

