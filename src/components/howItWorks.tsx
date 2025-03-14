import ipad from "../assets/iPad Pro (11 inch) Mockup.png"
import create from "../assets/Group 1350.png"
import attend from "../assets/Group 1352.png"
import download from "../assets/Group 1351.png"
import connect from "../assets/Group 1352.png"
function How(){
    return <div className="w-[90%] h-[617px]">
        <h1 className="font-bold text-[#272643] text-[32px] text-center">How It Works?</h1>
        <div className="h-[95%] flex flex-row">
            <div className="h-[100%] flex flex-col items-center justify-evenly w-[20%]">
                <div className="flex flex-col items-end justify-center">
                    <img src={create} alt="create_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Create Account</p>
                    <p className="text-[14px] text-[#272643] font-semibold">Sign up to have full experience of this platform</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <img src={attend} alt="attend_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Attend virtual classes </p>
                    <p className="text-[14px] text-[#272643] font-semibold">Connect with your tutor and coursemates through our video-conferencing feature </p>
                </div>
            </div>
            <div className="h-[100%] flex flex-col items-center justify-end  mx-[30px] w-[60%]">
                <div className="h-[466px] w-[466px] bg-[#4C4A82] shadow-xl rounded-full shadow-black"></div>
                <img src={ipad} alt="ipad" className="absolute mb-[30px]"/>
            </div>
            <div className="h-[100%] flex flex-col items-center justify-evenly w-[20%]">
                <div className="flex flex-col items-start justify-center">
                    <img src={download} alt="download_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Check and Download Materials </p>
                    <p className="text-[14px] text-[#272643] font-semibold">After sign up, go through the course to get the actual materials you need </p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <img src={connect} alt="connect_img" />
                    <p className="text-[16px] text-[#272643] my-[5px] font-bold">Connect with other students </p>
                    <p className="text-[14px] text-[#272643] font-semibold">Chat and discuss with students in other universities  all over Nigeria </p>
                </div>
            </div>
        </div>
    </div>
}

export default How