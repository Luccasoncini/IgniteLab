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

        navigate('/event');

    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-theme-blue">aplicação completa</strong>, do zero, com <strong className="text-theme-blue">React</strong>
                    </h1>
                    <p className="mt-4 text-theme-gray_text leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-theme-gray_stroke rounded">
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