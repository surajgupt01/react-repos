import aboutImg from '../assets/about.jpg';
import { motion, useInView } from 'framer-motion';
import React from 'react';

const About = () => {
    const { ref: inViewRef, inView } = useInView({
        // triggerOnce: true, // Ensures animation triggers only once
        threshold: 0.5,    // Adjust threshold as needed
    });

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About 
                <span className="text-neutral-500"> Me</span>
            </h1>
            
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        className="flex items-center justify-center"

                        whileInView={{opacity:1 , x:0 }}
                        initial = {{opacity:0, x:-100}}
                        transition={{duration:0.5}}

                        
                    >
                        <img className='rounded-2xl' src={aboutImg} alt="About" />
                    </motion.div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <motion.div
                        className='flex justify-center lg:justify-start'
                        whileInView={{opacity:1 , x:0 }}
                        initial = {{opacity:0, x:100}}
                        transition={{duration:0.5}}
                    >
                        <p className='my-2 max-w-xl py-6'>
                            Hello! I'm Suraj Gupta, currently in my 3rd year of pursuing a Bachelor's degree in Computer Science and Engineering. My journey at Manipal University Jaipur has been an enriching and transformative experience. The vibrant campus life, combined with rigorous academics, has provided me with a solid foundation in both theoretical and practical aspects of computer science. I particularly enjoy the collaborative environment and the opportunity to engage with cutting-edge technology and research. This college has not only honed my technical skills but also nurtured my passion for innovation and problem-solving. I am grateful for the support of my professors and peers, who constantly inspire me to push boundaries and strive for excellence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;
