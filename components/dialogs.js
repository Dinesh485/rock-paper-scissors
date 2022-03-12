import { motion } from "framer-motion";


const Dialogs = ({control}) => {
     
    const child ={
        hidden:{
            x: '-50%',
            scale: 0.8,
            opacity:0
        },
        start:{
            x: '-50%',
           scale: [0.8, 1.5],
           opacity: [0,1,0],
           transition: {
             duration: 0.3
           }
        },
        
    }
    
    return ( <div className="fixed w-full h-1/3 flex items-center justify-center text-4xl 2xl:text-5xl font-bold ">
            <motion.div initial ={'hidden'} animate ={control} transition = {{staggerChildren: 0.5 }}>
               <motion.span  variants ={child} className="absolute ">ROCK</motion.span>
               <motion.span  variants ={child} className="absolute ">PAPER</motion.span>
               <motion.span  variants ={child} className="absolute ">SCISSOR</motion.span>
            </motion.div>
    </div> );
}
 
export default Dialogs;