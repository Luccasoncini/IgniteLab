import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { useMenu } from "../hooks/useMenu";
import { Lesson } from "./Lesson";

export function Sidebar() {
    const { data } = useGetLessonsQuery()
    const { isMenuOpened } = useMenu(); 

    return(
        <aside className={`${isMenuOpened ? 'left-0 z-50' : 'left-full z-0'} fixed lg:min-w-[348px] lg:max-w-[348px] w-full top-[75px] transition-all  bg-theme-gray_background p-6 border-l lg:relative border-theme-gray_stroke lg:top-0 lg:left-auto `}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-theme-gray_stroke block">
                Cronograma de Aulas
            </span>

            <div className="flex flex-col gap-8 absolute left-0 top-30 px-6 h-[80vh] pb-20 overflow-y-scroll bg-theme-gray_background lg:relative lg:overflow-hidden lg:h-auto lg:top-0 lg:px-0 lg:pb-0">
                {data?.lessons.map(({id ,title, slug, availableAt, lessonType}) => {
                    return(
                        <Lesson key={id}
                            title={title}
                            slug={slug}
                            availableAt={new Date(availableAt)}
                            type={lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}