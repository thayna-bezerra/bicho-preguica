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
              onClick={() => window.open('https://wa.me/559984050108?text=Ol%C3%A1%2C%20tudo%20bom%3F%20Eu%20gostaria%20de%20ser%20um%20patrocinador%20do%20*Bicho%20Pregui%C3%A7a*!')}
              className="bg-yellow-bp text-white rounded-md uppercase text-base font-bold md:w-full p-4 mt-8"
            >
              Seja um patrocinador
          </button>
        </div>
    )
}