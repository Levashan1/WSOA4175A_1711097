const menuData = [

  { title: 'Home', link: '/index'},
  { title: 'Blog', link: '/Blog'},
  { title: 'About', link: '/About'},

]
const intializemenu = () => {
    const Nav = document.querySelector('nav');
    
    const Ul = document.createElement('ul');
    
    for(let item of ['Home', 'Blog', 'About']){
        const Li = document.createElement('li');
        Li.innerText = item;
        
        document.Ul.appendChild(Li);
    
    }
    document.Nav.appendChild(ul);
    };
document.addEventListener('DOMContentLoaded', () => intializemenu());