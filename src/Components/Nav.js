import React, { useState, useEffect } from 'react';
import "../CSS/style.css"

function Nav() {

    const [show, handleshow] = useState(false);
    useEffect (()=> {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100){
                handleshow(true);
            } else { handleshow(false) }
        });
        return () => {
            window.removeEventListener("scroll", ()=>{
                if (window.scrollY > 100){
                handleshow(true);
            } else { handleshow(false) }
            });
        }
    })
    
  return (
    <div className={`nav ${show && "nav_black"} px-1 py-1`}>
        <div className="nav__logo">Netflix</div>
        <div className="nav__avatar">Avatar</div>
    </div>
  )
}

export default Nav