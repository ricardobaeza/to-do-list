let newElement = () => {
    let newLi = document.createElement('li');
    let input = document.getElementById('myInput').value;
    let text = document.createTextNode(input);
    newLi.appendChild(text);
    if (input === '') {
         alert('you need to add something in');
    } else {
        document.getElementById('list').appendChild(newLi);
    }
};


