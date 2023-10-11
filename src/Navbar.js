
export function Navbar(){
    
    return(
        <nav>
            <div className="logo"><p>MiPortfolio</p></div>
            <div className="menu">
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
                
                <button className="btn2">
                    <span><i className="fa-solid fa-sun"></i></span>
                    <span><i className="fa-solid fa-moon"></i></span>
                </button>
                
            </ul>
            
        </nav>
    );
}