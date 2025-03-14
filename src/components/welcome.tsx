import welcome from "../assets/—Pngtree—e learning and people thinking_6535697.png"
import { useState } from "react"
function Welcome(){
    const [eEmail, seteEmail] = useState("")
    return <div className="flex flex-row items-center justify-evenly w-[90%] h-[650px] relative">
        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute top-[250px] right-[-40px]">o</div>
        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute left-[-40px] top-[120px]">o</div>
        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute  top-[500px]">o</div>
            <div className="h-[60%] flex flex-col justify-evenly">
               <div>
               <h1 className="text-[48px] font-bold text-[#272643]  my-[15px]">Welcome to ParaLearn</h1>
                <h3 className="text-[25px] font-semibold text-[#272643] my-[10px]">Connect, Share & Engage</h3>
                <p className="text-[24px]  text-[#272643] my-[10px]">
                Take that little step in downloading that material, learning that course or watching that tutorial video because tiny steps are all you need for that academic breakthrough you desire.
                </p>
               </div>
                <div className="w-[80%] ">
                <input type="text"  value={eEmail} onChange={(e) => seteEmail(e.target.value)} className="h-[60px] bg-[#E0E0E0] w-[60%] p-[15px]" placeholder="Enter Your Email"/>
                <button className="bg-[#F53838] text-[white] font-semibold text-[20px] h-[60px] w-[40%]">Start Learning</button>
                </div>
            </div>
            <div className="h-[100%] ">
                <img src={welcome} alt="thining" />
            </div>
    </div>
}


export default Welcome