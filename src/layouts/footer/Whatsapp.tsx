import { BsWhatsapp } from "react-icons/bs"; 
import React from 'react'

const Whatsapp: React.FC = () => {
    const message = encodeURIComponent("Bonjour, je vous contacte depuis votre site web");
  return (
    <div className="whatsapp">
      <a href={`https://wa.me/682216545?text=${message}`} 
       className="whatsapp-button">
  <BsWhatsapp />
</a>
    </div>
  )
}

export default Whatsapp
