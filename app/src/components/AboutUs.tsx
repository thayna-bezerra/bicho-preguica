import sobre from "../assets/sobre-nos.png"

export function AboutUs() {
    return (
        <div id="sobre" className="bg-blue-bp h-auto flex flex-col md:flex-row justify-center items-center">
            <div className="text-white text-center py-5">
                <p className="uppercase text-lg md:text-2xl pb-5 font-bold text-white">
                    Sobre nós
                </p>
                <p className="text-sm md:text-lg px-10">Sejam todos bem-vindos ao Carnaval do Bicho Preguiça um bloco que há mais de uma década encanta e agita os corações dos foliões apaixonados por essa festa tão brasileira.
                    Tornou-se o queridinho dos amantes do Carnaval, graças à sua estrutura única, atrações espetaculares e compromisso inabalável com a diversão e segurança de todos os participantes.

                    Estamos ansiosos para receber, em 2024, tanto a geração raiz que já faz parte dessa história, quanto a nova geração, pronta para tornar nosso bloco ainda mais vibrante e diferenciado. Venham se juntar a nós para fazer deste Carnaval um momento único, repleto de alegria, música e energia contagiante.

                    É hora de celebrar juntos e fazer deste bloco um espetáculo inesquecível para todos! 
                </p>
            </div>
            <div className="w-full">
                <img className="w-full h-full object-cover" src={sobre} alt="sobre nos" />
            </div>
      </div>
    )
}