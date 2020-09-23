const intializemenu = () => {
    const nav = document.querySelector('nav');
    
    const ul = document.createElement('ul');
    
    for(let item of ['Home', 'Blog', 'About']){
        const li = document.createElement('li');
        li.innerText = item;
        
        ul.appendChild(li);
    
    }
    nav.appendChild(ul);
    };
    document.addEventListener('DomContentLoaded', () => intializemenu());