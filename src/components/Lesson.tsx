import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import { useMenu } from '../hooks/useMenu';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableFateFormatted = format(props.availableAt, "EEE' • 'd' de 'MMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug == props.slug

    const { handleToggleMenu } = useMenu(); 

    return(
        <Link to={`/event/lesson/${props.slug}`} onClick={() => {handleToggleMenu()}} className="group">
            <span className="text-theme-gray_text">
                {availableFateFormatted}
            </span>
            {isActiveLesson ? (
                    <div className={`rounded border border-theme-gray_stroke p-4 mt-2 group-hover:border-theme-green transition-colors bg-theme-green`}>
                        <header className="flex items-center justify-between">
                            {isLessonAvailable ? (
                                <span className="text-sm text-theme-white font-medium flex items-center gap-2">
                                    <CheckCircle size={20}/>
                                    Conteúdo Liberado
                                </span>
                            ) : (
                                <span className="text-sm text-theme-warning font-medium flex items-center gap-2">
                                    <Lock size={20}/>
                                    Em breve
                                </span>
                            )}
                            
                            <span className="text-xs rounded py-[0.125rem] px-2 text-theme-white border border-theme-white placeholder:font-bold">
                                {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                            </span>
                        </header>

                        <strong className="text-theme-white mt-5 block">
                            {props.title}
                        </strong>
                    </div>
                ) : (
                    <div className={`rounded border border-theme-gray_stroke p-4 mt-2 group-hover:border-theme-green transition-colors`}>
                        <header className="flex items-center justify-between">
                            {isLessonAvailable ? (
                                <span className="text-sm text-theme-blue font-medium flex items-center gap-2">
                                    <CheckCircle size={20}/>
                                    Conteúdo Liberado
                                </span>
                            ) : (
                                <span className="text-sm text-theme-warning font-medium flex items-center gap-2">
                                    <Lock size={20}/>
                                    Em breve
                                </span>
                            )}
                            
                            <span className="text-xs rounded py-[0.125rem] px-2 text-theme-white border border-theme-green_light placeholder:font-bold">
                                {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                            </span>
                        </header>

                        <strong className="text-theme-gray_text mt-5 block">
                            {props.title}
                        </strong>
                    </div>
                )}
        </Link>
    )
}