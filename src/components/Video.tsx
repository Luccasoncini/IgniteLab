import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react";
import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string;
}

export function Video({lessonSlug}: VideoProps) {

    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: lessonSlug
        }
    })
    
    if(!data || !data.lesson) {
        return (
            <>
                <div className="flex-1 justify-center items-center flex h-[500px]">
                    <span className="h-20 w-20 rounded-full border-theme-blue border-[8px] border-t-inherit border-t-transparent animate-spin">
                    </span>
                </div>
            </>
        )
    }
    return(
        <div className="flex-1 flex flex-col w-full">
            <div className="flex justify-center items-center">   
                <div className="w-full h-full aspect-video lg:h-auto lg:max-w-[1092px]">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            

            <div className="p-8 lg:flex lg:justify-center lg:items-center lg:flex-col">
                <div className="flex items-start flex-col gap-y-4 lg:flex-row lg:justify-between lg:w-full lg:max-w-[1092px]">
                    <div className="flex-1 w-full mr-10">
                        <h1 className="text-2xl font-bold"> 
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-theme-gray_title leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="w-full flex items-center gap-4 my-6">
                                <img
                                    className="h-16 w-16 rounded-full border-2 border-theme-blue" 
                                    src={data.lesson.teacher.avatarURL} 
                                />
                                <div className="flex flex-col gap-y-4 lg:gap-y-1">
                                    <strong className="font-bold text-lg leading-7 block lg:text-2xl">
                                        {data.lesson.teacher.name}
                                    </strong>
                                    <span className="text-gray-200 text-sm leading-5 block">
                                        {data.lesson.teacher.bio}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-start w-full lg:w-auto">
                        <a target="_blank" href="https://discord.gg/4kRsZ6Tf2y" className="p-4 text-sm bg-theme-green flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-theme-green_dark transition-colors w-full lg:w-auto">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>

                        { data.lesson.challenge && (
                            <a href={data.lesson.challenge.url} className="p-4 text-sm border border-theme-blue text-theme-blue flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-theme-blue hover:text-theme-gray_bars transition-colors  w-full">
                                <Lightning size={24} />
                                Acesso ao Desafio
                            </a>
                        )}
                    </div>
                </div>

                <div className="mt-16 grid grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-none lg:max-w-[1092px]">
                    <a className="flex justify-around items-center h-full bg-theme-gray_background overflow-hidden gap-4 hover:bg-theme-gray_elements transition-colors rounded-md" target="_blank" href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" > 
                        <div className="py-5 bg-theme-green_dark h-full p-2 flex justify-center items-center xl:py-20 xl:px-6">
                            <FileArrowDown size={40}/>
                        </div>

                        <div className="py-5 flex flex-col justify-start items-center">
                            <strong className="text-lg lg:text-2xl text-left w-full">
                                Material Complementar
                            </strong>
                            <p className="text-xstext-theme-gray_text mt-2 lg:text-sm">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>

                        <div className="py-5 my-auto flex justify-center text-theme-blue xl:mr-5">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a className="h-full bg-theme-gray_background justify-around items-center overflow-hidden flex gap-4 hover:bg-theme-gray_elements transition-colors rounded-md" target="_blank" href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR" > 
                        <div className="bg-theme-green_dark h-full p-2 flex justify-center items-center xl:py-20 xl:px-6 ">
                            <Image size={40}/>
                        </div>

                        <div className="flex flex-col justify-start items-center">
                            <strong className="text-lg lg:text-2xl text-left w-full">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-xstext-theme-gray_text mt-2 lg:text-sm">
                             Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>

                        <div className="my-auto flex justify-center text-theme-blue xl:mr-5">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}