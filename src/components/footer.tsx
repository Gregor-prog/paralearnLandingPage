import logo from "../assets/paralearn_logo.png"
import facebook from "../assets/Facebook.png"
import twitter from "../assets/Twitter.png"
import instagram from "../assets/Instagram.png"
import { useState } from "react"
import { Toaster, toast } from 'sonner';
function Footer(){
    const [Email, setEmail] = useState("")

   async function sendEmail (){

        try {
            if(Email == "" || Email == null){
                throw new Error("email format not valid");
            }
            const send = await fetch("https://script.google.com/macros/s/AKfycbzUrmj3kQ1wZsH3pDfa5u6fM7D9BzAuwaFWDFNisM2gjz87DwgJo69Kn13Q9KV9Qh-g/exec", {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body:(`Email=${Email}`)
            })
            if(!send.ok){throw new Error("could'nt send email");}
            toast.success("You have registered for paralearn newsletter")
        } catch (error) {
            if(error){
                console.log(error)
                toast.error("couldn't register, try again")
            }
        }

    }

    return <div className="sm:h-[360px] w-[100%] bg-[#4C4A82] h-auto">
        <Toaster richColors position="top-right" />
         <div className="flex sm:flex-row items-center justify-evenly p-[20px] flex-col">
            <div className="flex items-center justify-evenly sm:w-[50%] w-[100%] my-[10px]">
                <div className="flex flex-col items-center justify-evenly ">
                    <img src={logo} alt="paralearn_logo" className="w-[98px] h-[98px] sm:w-[185px] sm:h-[185px] rounded-full"/>
                    <div className="flex"> 
                    <img src={facebook} alt="facebook"className="sm:h-auto sm:w-auto h-[27px] w-[27px]" />
                    <img src={twitter} alt="twitter" className="sm:h-auto sm:w-auto h-[27px] w-[27px]"/>
                    <img src={instagram} alt="instagram" className="sm:h-auto sm:w-auto h-[27px] w-[27px]"/>
                    </div>
                </div>
                <ul>
                    <li className="font-semibold text-white text-[18px]"><a href="#">HOME</a></li>
                    <li className="font-semibold text-white text-[18px]"><a href="#">INSTITUTIONS</a></li>
                    <li className="font-semibold text-white text-[18px]"><a href="#">BLOG</a></li>
                    <li className="font-semibold text-white text-[18px]"><a href="#">ABOUT US</a></li>
                    <li className="font-semibold text-white text-[18px]"><a href="#">PRICING</a></li>
                    <li className="font-semibold text-white text-[18px]"><a href="#">CONTACT US</a></li>
                </ul>
            </div>
            <div>

            <p className="font-bold text-white text-[25px]"><span className="text-[#F53838]">Subscribe </span>to our Newsletter</p>
            <div className="sm:w-[540px] flex flex-row items-center w-auto">
            <input type="email"  value={Email} onChange={(e) => setEmail(e.target.value)} className="h-[60px] bg-[#ffffff] w-[70%] p-[15px] rounded-l-[6px]" placeholder="Enter Your Email"/>
            <button className="bg-[#F53838] text-[white] font-semibold text-[20px] h-[60px] w-[30%] rounded-r-[6px]" onClick={sendEmail}>Subscribe</button>
            </div>
        </div>
        </div>
            <p className="text-[20px] text-[#FFFFFF] text-center">Copyright © 2020 Parakletus Hub Nigeria . All Rights Reserved.</p>
    </div>
}

export default Footer