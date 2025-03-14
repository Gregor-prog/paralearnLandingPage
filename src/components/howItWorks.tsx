import ipad from "../assets/iPad Pro (11 inch) Mockup.png"
import create from "../assets/Group 1350.png"
import attend from "../assets/Group 1352.png"
import download from "../assets/Group 1351.png"
import connect from "../assets/Group 1352.png"
import {motion} from "framer-motion"
function How(){
    return <div className="w-[90%] sm:h-[617px] h-auto">
        <h1 className="font-bold text-[#272643] text-[32px] text-center mb-[40px]">How It Works?</h1>
        <div className="h-[95%] flex sm:flex-row flex-col">
            <div className="h-[100%] flex flex-col items-center justify-evenly sm:w-[20%] w-[100%] ">
                <div className="flex flex-col sm:items-end sm:justify-center items-center justify-center sm:w-auto w-[67%] sm:shadow-none shadow-2xl sm:p-0 p-[45px]">
                    <img src={create} alt="create_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Create Account</p>
                    <p className="text-[14px] text-[#272643] font-semibold">Sign up to have full experience of this platform</p>
                </div>
                <div className="flex flex-col sm:items-end sm:justify-center items-center justify-center sm:w-auto w-[67%] sm:shadow-none shadow-2xl sm:p-0 p-[45px]">
                    <img src={attend} alt="attend_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Attend virtual classes </p>
                    <p className="text-[14px] text-[#272643] font-semibold">Connect with your tutor and coursemates through our video-conferencing feature </p>
                </div>
            </div>
            <div className="h-[100%] flex flex-col items-center justify-end bg-red  mx-[30px] sm:w-[50%] w-[100%] my-[30px]">
                <div className="sm:h-[466px] sm:w-[466px] w-[400px] h-[400px] bg-[#4C4A82] shadow-xl rounded-full shadow-black absolute z-[-1]"></div>
                
                <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 10 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }} // Only animate once
        className="sm:w-[70%] w-[90%]"
      >    

                <img src={ipad} alt="ipad" className=" mb-[30px] static z-2 sm:ml-[]"/>

</motion.div>
            </div>
            <div className="h-[100%] flex flex-col items-center justify-evenly sm:w-[20%] w-[100%]">
                <div className="flex flex-col sm:items-start sm:justify-center items-center justify-center sm:w-auto w-[67%] sm:shadow-none shadow-2xl sm:p-0 p-[45px]">
                    <img src={download} alt="download_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Check and Download Materials </p>
                    <p className="text-[14px] text-[#272643] font-semibold">After sign up, go through the course to get the actual materials you need </p>
                </div>
                <div className="flex flex-col sm:items-start sm:justify-center items-center justify-center sm:w-auto w-[67%] sm:shadow-none shadow-2xl sm:p-0 p-[45px]">
                    <img src={connect} alt="connect_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Connect with other students </p>
                    <p className="text-[14px] text-[#272643] font-semibold">Chat and discuss with students in other universities  all over Nigeria </p>
                </div>
            </div>
        </div>
    </div>
}

export default How