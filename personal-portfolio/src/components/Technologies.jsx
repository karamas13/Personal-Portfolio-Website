import { RiReactjsLine } from "react-icons/ri"
import { RiFireLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";








const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400 text-6xl">
                <RiReactjsLine/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-orange-500 text-6xl">
                <RiFireLine/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-green-600 text-6xl">
                <RiNodejsLine />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400 text-6xl">
                <RiTailwindCssFill />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-purple-500 text-6xl">
                <BsBootstrap />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-neutral-200 text-6xl">
                <BsFiletypeSql />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 text-green-600 text-6xl">
                <SiMongodb />
            </div>
        </div>
    </div>
  )
}

export default Technologies