import abada from "../assets/abada.png"

export function EventShirtSurvey(){
    return(
        <div id="votacao" className="flex flex-col justify-center items-center gap-5 bg-blue-bp h-auto p-4 mt-2">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeN0McpFHwhd6ENd6VsL5oeyGj7YFUuVHkVxNUmuMEhjZGopA/viewform?embedded=true" 
              width="640" 
              height="929" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0"
              >
                Carregando…
            </iframe>
        </div>
    )
}

{/*

          <div className="flex flex-col items-center text-white">
            <p className="uppercase text-lg">
              Vote e escolha no abadá do 
            </p>
            <p className="text-lg md:text-2xl font-bold">
              BICHO PREGUIÇA
            </p>
          </div>
  
          <div>
            <div className="lg:flex lg:flex-items grid grid-cols-2 gap-x-10 gap-y-6">
              <img src={abada} alt="abada1" />
              <img src={abada} alt="abada2" />
              <img src={abada} alt="abada3" />
              <img src={abada} alt="abada4" />
            </div>
          </div>
  
          <div>
            <button className="rounded-full m-4 px-8 py-2 font-bold text-sm md:text-lg uppercase text-white bg-pink-bp">
              Confirmar escolha
            </button>
          </div>


*/}