
// import { useEffect } from "react";

export function Navbar(){

    const animation_menu = ()=>{
        let line1__menu = document.querySelector('.line1__menu');
        let line2__menu = document.querySelector('.line2__menu');
        let line3__menu = document.querySelector('.line3__menu');
        let items_menu = document.querySelector('nav ul');
    
        line1__menu.classList.toggle('activeline1__menu');
        line2__menu.classList.toggle('activeline2__menu');
        line3__menu.classList.toggle('activeline3__menu');
        items_menu.classList.toggle('items_menu');
    };

    const light_theme = ()=>{
        document.body.classList.toggle('white');
        let btn2 = document.querySelector('.btn2');
        btn2.classList.toggle('active'); 
    };
   
  
    

    // useEffect(() => {
    //     const scroll_nav = ()=>{
    //     let nav = document.querySelector('nav');
    //     nav.classList.toggle('colorNav');
    //     }
       
    //     window.addEventListener('scroll', scroll_nav);
      
    //     return () => {
    //        window.removeEventListener('scroll', scroll_nav);
    //     };
    // }, []);
      


    return(
        <nav >
            <div className="logo"><p>MiPortfolio</p></div>
            <div className="menu" onClick={animation_menu}>
                <span className="line1__menu"></span>
                <span className="line2__menu"></span>
                <span className="line3__menu"></span>
            </div>
            <ul>
                <li><a href="#Home">Inicio</a></li>
                <li><a href="#Me">Acerca de mí</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Proyectos</a></li>
                <li><a href="#Contact">Contacto</a> </li>
                
                <button className="btn2" onClick={light_theme}>
                    <span><i className="fa-solid fa-sun"></i></span>
                    <span><i className="fa-solid fa-moon"></i></span>
                </button>
                
            </ul>
            
        </nav>
    );
}