const button = document.querySelector('button');

button.onclick = function(){
    let name = prompt('what is your name?');
    alert('Hello '+ name +',nice to see you!');
}