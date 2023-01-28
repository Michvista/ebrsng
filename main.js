const hammenu = document.getElementById("hammenu") 
const navlinks = document.getElementsByClassName('navlinks')[0] 
const ul = document.querySelector('.nav_links') 
let menuOpen = false;  
hammenu.addEventListener('click', () => { 
  if (!menuOpen) { 
       ul.style.left = '0%';
        hammenu.classList.add('open'); 
         menuOpen = true;
        }  else {  ul.style.left = '-100%'; 
        hammenu.classList.remove('open'); 
         menuOpen = false; 
       }
}); 