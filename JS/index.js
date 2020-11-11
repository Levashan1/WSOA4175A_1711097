
const menu = [
  {title: 'Projects', link: '../Projects'},
  {title: 'Blogs', link: '../Blog'},
  {title: 'About', link: '../Abou'}

];


const CreateMenu = () => {
  const nav = document.querySelector('nav');

  const ul = document.createElement('ul');
 
  for(let item of menu){

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = item.title;
    a.href = item.link
    li.appendChild(a);
    ul.appendChild(li)
  }

  nav.appendChild(ul)
};
document.addEventListener('DOMContentLoaded', () => CreateMenu());

