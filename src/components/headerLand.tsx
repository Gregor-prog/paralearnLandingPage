import { useState,useEffect } from "react"
import logo from "../assets/paralearn_logo-removebg-preview.png"
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import {Outlet,Link} from "react-router-dom"
function HeaderLand(){
    const [search, setsearch] = useState("")
    const [isNav, setisNav] = useState(false)

    useEffect(() => {
        if(window.innerWidth > 440){
            setisNav(true)
            console.log(window.innerWidth)
        }
    })

   

    function submit(e : any){
        setsearch(e.target.value)
    }

    return <div className="flex flex-col sm:flex-row items-center sm:justify-evenly bg-white sm:bg-transparent justify-between w-[100%] ">
        <div className="overflow-hidden flex justify-evenly items-center w-[100%] sm:w-auto">
        <img src={logo} alt="logo" className="w-[103px] h-[90px] sm:m-0 mr-[190px]"/>
        {isNav? <MdCancel className="sm:hidden" onClick={() => {setisNav(false)}}/> : <CiMenuBurger className="sm:hidden" onClick={() => {setisNav(true); console.log(isNav)}}/>}
        </div>
        <ul className=" sm:flex-row items-center justify-evenly sm:w-[80%] w-[100%] flex sm:flex flex-col absolute sm:static top-[90px] h-[400px] sm:h-auto bg-[#ffffff6c] backdrop-blur-sm sm:bg-transparent z-[2] "style={isNav?{display:"flex"}:{display:"none"}}>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] border-[#F53838]"><Link to="/">HOME</Link></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] border-[#F53838]"><Link to="/institutions">INSTITUTIONS</Link></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] border-[#F53838]"><Link to="/Blog">BLOG</Link></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] border-[#F53838]"><Link to="/About">ABOUT US</Link></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] border-[#F53838]"><Link to="/Pricing">PRICING</Link></li>
            <li className="text-[16px] font-semibold hover:text-[#F53838] hover:border-b-[3px] border-[#F53838]"><Link to="/contact">CONTACT US</Link></li>
            <li className="flex flex-col sm:flex-row items-center justify-evenly w-[40%] h-[190px] sm:h-auto">
            <form action="" method="post" onSubmit={(e) => submit(e)} className="">
            <input type="text" name="Search" id="Search" value={search} onChange={(e) => {setsearch(e.target.value)}} className="w-[202px] h-[46px] rounded-[6px] border-[2px] border-[#FAFDFF] p-[10px]" placeholder="Search"/>
        </form>
        <a href="https://havilah.paralearn.com.ng"><button className="w-[128px] h-[52px] bg-[#F53838] rounded-[6px] text-[16px] font-semibold text-white">Login</button></a>
            </li>
        </ul>
        <Outlet/>
        {/* <form action="" method="post" onSubmit={(e) => submit(e)} className="invisible">
            <input type="text" name="Search" id="Search" value={search} onChange={(e) => {setsearch(e.target.value)}} className="w-[202px] h-[46px] rounded-[6px] border-[2px] border-[#FAFDFF]"/>
        </form>
        <button className="w-[128px] h-[52px] bg-[#F53838] rounded-[6px] text-[16px] font-semibold text-white hidden sm:block"><a href="/login">Login</a></button> */}
    </div>
}

export default HeaderLand