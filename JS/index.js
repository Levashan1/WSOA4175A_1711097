
const menu = [
  {title: 'Projects', link: '/Projects.html'},
  {title: 'Blogs', link: '/Blog.html'},
  {title: 'About', link: '/About.html'}

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

