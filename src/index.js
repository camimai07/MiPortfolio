import React from 'react';
import ReactDOM from 'react-dom/client';
import './SASS/main.scss';
import { Navbar }  from './Navbar';
import { Home }  from './Home';
import { Me }  from './Me';
import { Projects }  from './Projects';
import { Skills }  from './Skills';
import { Contact }  from './Contact';
// import { Contenedor }  from './Contenedor';


document.querySelector(".menu");
window.addEventListener("click", animation_menu);
    var line1__menu = document.querySelector(".line1__menu");
    var line2__menu = document.querySelector(".line2__menu");
    var line3__menu = document.querySelector(".line3__menu");
    var items_menu = document.querySelector("nav ul");
    
    function animation_menu(){
        line1__menu.classList.toggle('activeline1__menu');
        line2__menu.classList.toggle('activeline2__menu');
        line3__menu.classList.toggle('activeline3__menu');
        items_menu.classList.toggle('items_menu');
    }

const btn = document.querySelector('.btn2');

btn.addEventListener('click', () =>{
  document.body.classList.toggle('white');
  let btn2 =  document.querySelector('.btn2');
  btn2.classList.toggle('active');
    
});
    
window.addEventListener('scroll', ()=>{
  let nav = document.querySelector('nav');
  nav.classList.toggle('colorNav',this.window.scrollY>225);
})    
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <Navbar/>
    <div className="div">
      <section id="Total">
          <Home/>
          <Me>
            <Skills/>
          </Me>
          <Projects/>
          <Contact/>
      </section>
    </div>
  </>
);


