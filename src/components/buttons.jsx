import {motion} from "framer-motion"


const button=()=>{

    return(
        <div>
            <a href="https://drive.google.com/file/d/1n6ljH8lKtzDFEM_CDMdS2mxBV_RBDptw/view?usp=sharing"><motion.button className="h-12 w-36 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 m-1" whileInView={{opacity:1}}
                        initial = {{opacity:0}}
                        transition={{duration:1}}>Resume</motion.button></a>
            <a href="#contact"><motion.button className="h-12 w-36 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 m-1"   whileInView={{opacity:1}}
                        initial = {{opacity:0}}
                        transition={{duration:1}}>contact Me</motion.button></a>
        </div>
    )

}

export default button
