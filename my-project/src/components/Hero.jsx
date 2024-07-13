import {Hero_Content} from '../index.js'
import ProfileImage from '../assets/WhatsApp Image 2024-07-13 at 19.17.21_9b3e551dv.jpg'
import{motion} from 'framer-motion'
import Button from './buttons.jsx'

const fade={

    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };



const Hero=()=>{

    return (
        <div className="border-b border-neutral-900 pd-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl">
                        Suraj Gupta
                        </h1>
                        <motion.span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent" 
                       
                        whileInView={{opacity:1 , x:0 }}
                        initial = {{opacity:0, x:-100}}
                        transition={{duration:0.5}}>

                        Full Stack Developer

                        </motion.span>

                        <motion.p className='my-2 max-w-xl py-6 font-light tracking-tighter'
                         whileInView={{opacity:1 , x:0 }}
                        initial = {{opacity:0, x:-100}}
                        transition={{duration:0.5}}>
                            {Hero_Content}
                        </motion.p>
                        <Button/>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 lg:p-9'>
                    <div className='flex items-center justify-center'>
                        <motion.img className='rounded-2xl border-gray-200 w-120 h-128 object-cover m-2' src={ProfileImage} variants={fade}
          initial='hidden'
          animate='visible'></motion.img>
                    </div>
                </div>
 
            </div>
        </div>
    )

}

export default Hero;