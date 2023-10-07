'use client'

import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";



const Hero = () => {

    return (


        <section className="px-12 text-yellow-200 flex items-center min-h-screen">
        <div> 
                <AnimatedText someText={'"If the Earth were a single state, Istanbul would be its capital."'}/>
                <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3, duration: 1.5 }}
                className="mt-3 text-3xl font-bold"> - Napoleon Bonaparte</motion.h3>



<motion.div 
   initial={{ opacity: 0, y: 30, }}
   animate={{ opacity: 1, y: 0}}
   transition={{ delay: 4, duration: 1.5 }}>

<Link href="/istanbul" className="w-36 "> 
              
        <button className="rounded-full rounded-l-none mt-12 w-36 bg-red-700 p-2 text-center hover:w-48 transition-all text-2xl text-white"> Explore</button>        
           </Link>  </motion.div>





        </div>
          




        </section>








   );
 }
   export default Hero;