import logo from "../assets/paralearn_logo.png"
import facebook from "../assets/Facebook.png"
import twitter from "../assets/Twitter.png"
import instagram from "../assets/Instagram.png"
import { useState } from "react"
function Footer(){
    const [eEmail, seteEmail] = useState("")
    return <div className="sm:h-[340px] w-[100%] bg-[#4C4A82] h-auto">
         <div className="flex sm:flex-row items-center justify-evenly p-[20px] flex-col">
            <div className="flex items-center justify-evenly sm:w-[50%] w-auto ">
                <div className="flex flex-col items-center justify-evenly ">
                    <img src={logo} alt="paralearn_logo" className="w-[185px] h-[185px] rounded-full"/>
                    <div className="flex"> 
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
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
            <input type="text"  value={eEmail} onChange={(e) => seteEmail(e.target.value)} className="h-[60px] bg-[#ffffff] w-[70%] p-[15px] rounded-l-[6px]" placeholder="Enter Your Email"/>
            <button className="bg-[#F53838] text-[white] font-semibold text-[20px] h-[60px] w-[30%] rounded-r-[6px]">Subscribe</button>
            </div>
        </div>
        </div>
            <p className="text-[20px] text-[#FFFFFF] text-center">Copyright © 2020 Parakletus Hub Nigeria . All Rights Reserved.</p>
    </div>
}

export default Footer