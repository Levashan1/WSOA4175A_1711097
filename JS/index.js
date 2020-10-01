

const menuItem = [

  { title: 'Home', link: '/index'},
  { title: 'Blog', link: '/Blog', children: blogPosts},
  { title: 'About', link: '/About'},
];

const createMenuItem = (item) => {
  const Li = document.createElement('li');
  const a = document.createElement('a');
  a.innerText = item.title;
  a.href = item.link;
  Li.appendChild(a);


        if(item.children && item.children.lenght){

          let ul = document.createElement('ul');
          for(let childitem of item.children){
            let childMenuitem = createMenuItem(childitem);
            ul.appendChild(childMenuitem);
          }
          li.appendChild(ul);
        }
        
return Li;
};
const intializemenu = () => {
    const nav = document.querySelector('nav');
    const ul = document.createElement('ul');
   
    for(let item of menuItem){
       const li = createMenuItem(item);
       ul.appendChild(Li);
    }
    document.nav.appendChild(ul);
    };
document.addEventListener('DOMContentLoaded', () => intializemenu());