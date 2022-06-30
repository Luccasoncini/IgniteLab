import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Lesson } from "../components/Lesson";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{slug: string}>()
    
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                { slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="justify-center items-center w-full h-min-">
                        <h2 className="hidden lg:block text-center bg-theme-warning p-9 rounded text-theme-gray_bars">
                            Clique em alguma das aulas ao lado para o Video ser renderizado em tela!
                        </h2>
                        <h2 className="lg:hidden text-center bg-theme-warning p-9 rounded text-theme-gray_bars">
                            Clique no menu de Aulas e seleciona alguma das aulas para o Video ser renderizado em tela!
                        </h2>
                      </div>
                }
                <Sidebar/>
            </main>
        </div>
    )
}