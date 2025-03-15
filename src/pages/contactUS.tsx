import { useState } from "react"
import map from "../assets/Screenshot (10) 1.png"
import location from "../assets/ic_baseline-location-on.png"
import email from "../assets/dashicons_email-alt.png"
import phone from "../assets/bi_telephone-outbound-fill.png"
import HeaderLand from "@/components/headerLand"
import Footer from "@/components/footer"
function Contact(){
        const [Username, setUsername] = useState("")
        const [password, setpassword] = useState("")
        const [text,settext] = useState("")

        function submit(){
            
        }
    return <div className="flex flex-col items-center">
        <HeaderLand/>
        <div className="flex sm:flex-row flex-col items-center justify-evenly w-[90%]">
            <div>
                <img src={map} alt="" />
                <div className="grid grid-cols 2">
                <p className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={location} alt=""/>4 Cardoso St, Mushin Lagos </p>
                <p className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={email} alt=""/>info@parakletus.com.ng </p>
                <p className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={phone} alt=""/>(+234)8148876125</p>
                
                </div>
            </div>

            <form onSubmit={submit} className=" sm:w-[50%] flex flex-col items-center">
            <h1 className="font-bold text-[45px] text-[#272643] my-[40px]">Welcome Back</h1>
            <input type="text" value={Username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" className="sm:w-[503px] w-[300px] h-[62px] p-[10px] border-[1px] border-[#F53838] mb-[40px]"/>
            <input type="password" value={password} onChange={(e) => {setpassword(e.target.value)}} placeholder="Password" className="sm:w-[503px] w-[300px] h-[62px] p-[10px] border-[1px] border-[#F53838]"/>
            <textarea value={text} onChange={(e) => {settext(e.target.value)}} className="h-[303px] sm:w-[503px] w-[300px] border-[1px] border-[#272643] mt-[30px]" placeholder="your message.."/>

            <button className="sm:w-[503px] w-[300px] h-[52px] bg-[#F53838] rounded-[6px] text-[16px] font-semibold text-white my-[90px]">Message</button>

        </form>


        </div>
        <Footer/>
    </div>
}

export default Contact