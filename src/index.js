import _ from 'lodash';

const idJson = require('./id.json');
console.log('This is index JS')

function addId(l){
    let idA = document.createElement("a");
    idA.setAttribute("href","#");
    let content = document.createTextNode(idJson.platform[l]);
    idA.appendChild(content);
    let idLine = document.createElement("li");
    idLine.appendChild(idA);
    return idLine;
}

function title(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','here'], '');
    element.classList.add('body');
    return element;
}

document.body.appendChild(title());
for(let i in idJson.platform){
        document.body.appendChild(addId(i));
    }   

document.getElementById('drink').appendChild(addId(1));
