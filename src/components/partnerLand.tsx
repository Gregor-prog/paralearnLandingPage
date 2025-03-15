import futaminna from "../assets/FUTMINNA_LOGO 2.png"
import unilag from "../assets/image 5.png"
import unibadan from "../assets/image 6.png"
import FUTA from "../assets/image 7.png"
import OAU from "../assets/image 8.png"
function PartnerLand(){
    return <div className="w-[90%] sm:my-[20px] mt-[200px]">
        <p className="font-bold text-[#272643] text-[32px] ml-[20px]">Partnered Schools</p>
        <div className="w-[100%] sm:flex flex-row items-center justify-evenly my-[35px] grid grid-cols-2 ">
            <div className="flex flex-col items-center p-[20px]">
                <img src={unibadan} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">Uni Lag</p>
            </div>
            <div className="flex flex-col items-center p-[20px]">
                <img src={unilag} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">Unibadan</p>
            </div>
            <div className="flex flex-col items-center p-[20px]">
                <img src={FUTA} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">FUTA</p>
            </div>
            <div className="flex flex-col items-center p-[20px]">
                <img src={OAU} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">OAU</p>
            </div>
            <div className="flex flex-col items-center p-[20px]">
                <img src={futaminna} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">FUTAMINA</p>
            </div>
        </div>
    </div>
}

export default PartnerLand