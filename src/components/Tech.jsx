import  {RiReactjsLine} from "react-icons/ri"
import  {DiMongodb} from "react-icons/di"
import  {FaNodeJs} from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";



const Tech = ()=>{
    return(

        <div className="border-b border-neutral-800 pb-24">
           <h2 className="my-20 text-center text-4xl">Technologies</h2>
           <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800">
                <DiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800">
                <FaNodeJs className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800">
                <TbBrandCpp className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800">
                <FaPython className="text-7xl text-yellow-400"/>
            </div>
           </div>
        </div>

    )
}

export default Tech