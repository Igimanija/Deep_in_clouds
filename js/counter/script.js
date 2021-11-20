var save_button = document.getElementById('save');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const jump = async () => {
    var pos = 0;
    while (pos>-10){
        save_button.style.top = pos + 'px';
        pos--;
        await sleep(20);
    }
    while (pos<11){
        save_button.style.top = pos + 'px';
        pos++;
        await sleep(5);
    }
    while (pos>-1){
        save_button.style.top = pos + 'px';
        pos--;
        await sleep(10);
    }
}

var count = document.getElementById('count');
var value = count.innerText;
function inc(){
    value++;
    count.innerText = value;
}
function dec(){
    value--;
    count.innerText = value;
}
function listed(){
    var items = document.getElementsByTagName('li');
    for(var i=0; i<items.length; i++){
        if(parseInt(items[i].innerHTML) == value){
            console.log('value');
            return;
        }
    }
    var li = document.createElement('li');
    var text = document.createTextNode(value);
    li.appendChild(text);
    var list = document.getElementById('list');
    list.appendChild(li);
}
