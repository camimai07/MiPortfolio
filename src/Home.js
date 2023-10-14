export function Home(){
    return(

        <>
            <section id="Home">
                    <div className="containerHome">
                        <div className="borde left"></div>
                        <div className="img-texto">
                            <div className="texto animate__animated animate__flipInY">
                                <h1>Hola! Soy</h1><br/>
                                <h1>Camila Luciana Maita</h1><br/>
                                <h1>Full-Stack Developer<span className="guion">_</span></h1><br/>

                                <div className="contacto-icons-home">
                                    <div className="contacto-icons-home_a"><a href="https://wa.me/1169971238" target="_blank"><i className="fa-brands fa-whatsapp fa-lg" style={{color: '#fffbfe'}}></i></a></div>
                                    <div className="contacto-icons-home_a"><a href="mailto:camilamaita07@gmail.com" target="_blank"><i className="fa-solid fa-envelope g"style={{color: '#fffbfe'}}></i></a></div>
                                    <div className="contacto-icons-home_a"><a href="" target="_blank"><i className="fa-solid fa-sheet-plastic" style={{color: '#fffbfe'}}></i></a></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="borde right"></div>
                    </div>
                    
                    
            </section>
        </>
    );
}