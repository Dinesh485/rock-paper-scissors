import { motion } from "framer-motion";
const ShowResult = ({result, handleReset}) => {
    return ( 
        <motion.div initial ={{scale: 0.5, opacity: 0}} animate ={{scale: 1 ,opacity: 1}} className={`gap-5 flex-col w-full h-full fixed top-0 left-0 text-white font-bold flex items-center justify-center  backdrop-blur-sm ${result === 'draw' ? 'bg-gray-500/80' : result === 'won'? 'bg-green-600/80' : 'bg-red-600/80' }`}>
            <h1 className="text-3xl md:text-5xl">{result === 'draw' ?'Draw' :` You have ${result}`}</h1>
            <button className=" flex gap-2 items-center" onClick={handleReset}>
            <svg  className="w-5 fill-current stroke-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M739.331866 397.979013a56.854145 56.854145 0 1 1 0-113.70829h95.571818C748.201113 168.686247 644.328591 113.708289 511.687871 113.708289a397.979013 397.979013 0 1 0 394.908889 447.783244 56.854145 56.854145 0 1 1 112.855477 14.042974A511.744156 511.744156 0 0 1 0.000569 511.687302a511.687302 511.687302 0 0 1 511.687302-511.687302c162.659708 0 293.13997 66.007662 397.979013 195.407695V113.935706a56.854145 56.854145 0 1 1 113.708289 0V341.124868a56.115041 56.115041 0 0 1-16.715118 40.19588 56.683582 56.683582 0 0 1-40.366443 16.658265h-226.961746z"  /></svg>
                <span>Play again</span>
                </button>
        </motion.div>
     );
}
 
export default ShowResult;