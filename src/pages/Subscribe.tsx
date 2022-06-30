import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import img from '/src/assets/mockup.png'

export function Subscribe() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    const navigate = useNavigate();

    const [ createSubscriber, { loading } ] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event/lesson/abertura-do-evento-ignite-lab');

    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="flex flex-wrap justify-center items-center w-full lg:mt-20 lg:max-w-[950px] lg:justify-between xl:max-w-[1100px]">
                <div className="flex flex-col justify-center items-center p-6 lg:items-start lg:max-w-[640px] lg:w-1/2 xl:w-2/3 lg:p-0 ">
                    <Logo/>
                    <h1 className="w-full text-center mt-8 mb-6 text-[2.5rem] leading-tight  lg:text-left lg:mb-0">
                        Construa uma <strong className="text-theme-blue">aplicação completa</strong>, do zero, com <strong className="text-theme-blue">React</strong>
                    </h1>
                    <p className="w-full text-center mt-4 mb-8 text-theme-gray_text leading-relaxed  lg:text-left lg:mb-0">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="w-full p-8 bg-theme-gray_background border border-theme-gray_stroke rounded lg:w-1/2 xl:w-1/3 lg:max-w-sm">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-theme-gray_bars rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                            required
                        />
                        <input 
                            className="bg-theme-gray_bars rounded px-5 h-14"
                            type="email" 
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-theme-green uppercase py-4 rounded font-bold text-sm hover:bg-theme-green_dark transition-colors disabled:opacity-50"
                        >
                            garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>


            <img src={img} alt="" />
        </div>
    ) 
}