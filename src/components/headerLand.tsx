import { useState } from "react"
import logo from "../assets/paralearn_logo-removebg-preview.png"

function HeaderLand(){
    const [search, setsearch] = useState("")

    function submit(e : any){
        // setsearch(e.target.value)
    }

    return <div className="flex flex-row items-center justify-evenly">
        <div className="w-[103px] h-[103px] overflow-hidden">
        <img src={logo} alt="logo" className="w-[103px] h-[90px]"/>
        </div>
        <ul className="flex flex-row items-center justify-evenly w-[697px]">
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] x"><a href="">HOME</a></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] x"><a href="">INSTITUTIONS</a></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] x"><a href="">BLOG</a></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] x"><a href="">ABOUT US</a></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] x"><a href="">CONTACT US</a></li>
        </ul>
        
        <form action="" method="post" onSubmit={(e) => submit(e)} className="invisible">
            <input type="text" name="Search" id="Search" value={search} onChange={(e) => {setsearch(e.target.value)}} className="w-[202px] h-[46px] rounded-[6px] border-[2px] border-[#FAFDFF]"/>
        </form>
        <button className="w-[128px] h-[52px] bg-[#F53838] rounded-[6px] text-[16px] font-semibold text-white"><a href="/login">Login</a></button>
    </div>
}

export default HeaderLand