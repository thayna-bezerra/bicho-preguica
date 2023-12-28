import sobre from "../assets/sobre-nos.png"

export function AboutUs() {
    return (
        <div id="sobre" className="bg-blue-bp h-auto flex flex-col md:flex-row justify-center items-center">
            <div className="text-white text-center py-5">
                <p className="uppercase text-lg md:text-2xl pb-5 font-bold text-white">
                    Sobre nós
                </p>
                <p className="text-sm md:text-lg px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure incidunt nulla obcaecati nobis sunt excepturi quas perferendis doloremque quia, dolorum expedita! Ipsum molestiae magni minima? Voluptatum, eligendi sint? Sed?</p>
            </div>
            <div className="w-full">
                <img className="w-full h-full object-cover" src={sobre} alt="sobre nos" />
            </div>
      </div>
    )
}