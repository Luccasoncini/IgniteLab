import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
    const { data } = useGetLessonsQuery()

    return(
        <aside className=" w-[348px] bg-theme-gray_background p-6 border-l border-theme-gray_stroke">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-theme-gray_stroke block">
                Cronograma de Aulas
            </span>

            <div className=" flex flex-col gap-8 ">
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