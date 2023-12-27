import wpp from "../assets/whatsapp.png"
import fb from "../assets/facebook.png"
import insta from "../assets/instagram.png"

export function Footer() {
    return (
        <div className="flex flex-col items-center justify-between pt-20 pb-10 md:mx-16 md:flex-row">
          <div className="flex gap-10 md:self-end md:w-full">
            <a href="#" className="w-12 h-12">
              <img src={wpp} alt="WhatsApp"/>
            </a>
            <a href="#" className="w-12 h-12">
              <img src={fb} alt="Facebook"/>
            </a>
            <a href="#" className="w-12 h-12">
              <img src={insta} alt="Instagram"/>
            </a>
          </div>

          <button className="bg-yellow-bp text-white rounded-md uppercase text-base font-bold md:w-full p-4 mt-8">
            Seja um patrocinador
          </button>
        </div>
    )
}