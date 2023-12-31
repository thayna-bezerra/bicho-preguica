import sobre from "../assets/sobre-nos.png"

export function AboutUs() {
    return (
        <div id="sobre" className="bg-blue-bp h-auto flex flex-col md:flex-row justify-center items-center">
            <div className="text-white text-center py-6">
                <p className="uppercase text-lg md:text-2xl pb-5 font-bold text-white">
                    Sobre nós
                </p>
                <p className="text-sm text-justify md:text-lg px-10">
                    Sejam todos bem-vindos ao <b>Carnaval do Bicho Preguiça</b> um bloco que há mais de uma década encanta e agita os corações dos foliões apaixonados por essa festa tão brasileira.
                    <br/><br/>
                    Tornou-se o queridinho dos amantes do Carnaval, graças à sua <b>estrutura única</b>, <b>atrações espetaculares</b> e <b>compromisso inabalável</b> com a diversão e segurança de todos os participantes.
                    <br/><br/>
                    Estamos ansiosos para receber, em <b>2024</b>, tanto a geração raiz que já faz parte dessa história, quanto a nova geração, pronta para tornar nosso bloco ainda mais vibrante e diferenciado. Venham se juntar a nós para fazer deste Carnaval <b>um momento único</b>, repleto de alegria, música e energia contagiante.
                    <br/><br/>
                    <span className="flex font-semibold justify-center text-center">É hora de celebrar juntos e fazer deste bloco um espetáculo inesquecível para todos!</span>
                </p>
            </div>
            <div className="w-full">
                <img className="max-w-full h-auto object-cover" src={sobre} alt="sobre nos" />
            </div>
      </div>
    )
}