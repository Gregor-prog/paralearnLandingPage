import vision from "../assets/Group 1347.png"
import mission from "../assets/Group 1346.png"
import HeaderLand from "@/components/headerLand"
import Footer from "@/components/footer"
function About(){
    return <div className="flex flex-col items-center">
        <HeaderLand/>
        <h1 className="font-bold text-[45px] text-[#272643] text-center m-[10px]">About Us</h1>
        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
        This system is based on the idea of a centralised platform that satisfies every need of a student irrespective of status or degree of academic achievments. It would serve not just as a pdf bank but other features as well that suits and meets the basic needs of every student or scholar 
        </p>
        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
        Parakletus.com.ng enables any individual in search of any educational material of intrest to easily access, ranging from textbooks,course materials,scholarship and busaries,academic blogs,tutorial videos,school trends and ads
        </p>
        <div className="flex sm:flex-row flex-col items-center justify-evenly w-[80%] mb-[100px] mt-[30px]">
            <div className="h-[436px] sm:w-[45%] w-[100%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly sm:m-0 my-[30px]">
            <img src={mission} alt="" />
            <h1 className="font-bold text-[45px] text-[#272643] text-center m-[10px]">Our Missions</h1>
            <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
            Our mission is to effect sustainable solutions to the African learning ecosystem and to change the narrative about technology in education in Africa.
            </p>      
            </div>

            <div className="h-[436px] sm:w-[45%] w-[100%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly sm:m-0 my-[30px]">
            <img src={vision} alt="" />
            <h1 className="font-bold text-[45px] text-[#272643] text-center m-[10px]">Our Vision</h1>
            <p className="text-[16px]  text-[#272643] my-[10px] w-[80%] text-center">
            Our Vision is to become a beacon of hope to the average student and to be a frontier in digitized learning.
            </p>      
            </div>
        </div>

        <Footer/>
    </div>
}

export default About