import welcome from "../assets/—Pngtree—e learning and people thinking_6535697.png"
import { useState } from "react"
import {motion} from "framer-motion"
function Welcome(){
    const [eEmail, seteEmail] = useState("")
    return <div className="flex sm:flex-row flex-col-reverse items-center justify-evenly w-[90%] sm:h-[650px] h-auto relative">



        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute top-[250px] right-[-40px] animate-bounce">o</div>
        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute left-[-40px] top-[120px] animate-bounce">o</div>
        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute  sm:top-[500px] top-[700px]">o</div>

            <div className="h-[60%] flex flex-col justify-evenly">

            <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }} // Only animate once
        className="h-auto"
      >
                    <div>
               <h1 className="text-[48px] font-bold text-[#272643]  my-[15px]">Welcome to ParaLearn</h1>
                <h3 className="text-[25px] font-semibold text-[#272643] my-[10px]">Connect, Share & Engage</h3>
                <p className="text-[24px]  text-[#272643] my-[10px]">
                Take that little step in downloading that material, learning that course or watching that tutorial video because tiny steps are all you need for that academic breakthrough you desire.
                </p>
               </div>
                <div className="sm:w-[80%] w-[100%]">
                <input type="text"  value={eEmail} onChange={(e) => seteEmail(e.target.value)} className="h-[60px] bg-[#E0E0E0] w-[60%] p-[15px]" placeholder="Enter Your Email"/>
                <a href="https://havilah.paralearn.com.ng"><button className="bg-[#F53838] text-[white] font-semibold text-[20px] h-[60px] w-[40%] sm:rounded-[0]">Start Learning</button></a>
                </div>


      </motion.div>
                
               
            </div>

            <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Only animate once
        className=" h-auto"
      >
                    <div className="sm:h-[100%] h-auto ">
                        <img src={welcome} alt="thining" />
                    </div>
      </motion.div>
    </div>
}


export default Welcome