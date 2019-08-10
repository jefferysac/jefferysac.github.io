import _ from 'lodash';

function title(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' there');
    return element;
}

document.body.appendChild(title());
