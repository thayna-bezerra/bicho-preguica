import wpp from "../assets/whatsapp.png"
import fb from "../assets/facebook.png"
import insta from "../assets/instagram.png"

export function Footer() {
    return (
        <div className="flex flex-col items-center justify-between pt-20 pb-10 md:mx-16 md:flex-row">
          <div className="flex gap-10 md:self-end md:w-full">
            <a href="https://wa.me/message/HET7PQ5LMNBRF1" className="w-12 h-12">
              <img src={wpp} alt="WhatsApp"/>
            </a>
            <a href="https://www.facebook.com/bichopregui" className="w-12 h-12">
              <img src={fb} alt="Facebook"/>
            </a>
            <a 
              href="https://www.instagram.com/bichopreguica.ofc" 
              className="w-12 h-12"
            >
              <img src={insta} alt="Instagram"/>
            </a>
          </div>

          <button 
              onClick={() => window.open('https://wa.me/559984050108?text=Caro%20amigo,%20gostaria%20de%20me%20tornar%20um%20patrocinador')}
              className="bg-yellow-bp text-white rounded-md uppercase text-base font-bold md:w-full p-4 mt-8"
            >
              Seja um patrocinador
          </button>
        </div>
    )
}