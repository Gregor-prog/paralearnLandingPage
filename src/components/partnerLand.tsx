import futaminna from "../assets/FUTMINNA_LOGO 2.png"
import unilag from "../assets/image 5.png"
import unibadan from "../assets/image 6.png"
import FUTA from "../assets/image 7.png"
import OAU from "../assets/image 8.png"
function PartnerLand(){
    return <div className="w-[90%]">
        <p className="font-bold text-[#272643] text-[32px] ">Partnered Schools</p>
        <div className="w-[100%] flex flex-row items-center justify-evenly my-[35px]">
            <div className="flex flex-col items-center">
                <img src={unibadan} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">Uni Lag</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={unilag} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">Unibadan</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={FUTA} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">FUTA</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={OAU} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">OAU</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={futaminna} alt="unilag" />
                <p className="text-[24px] font-bold text-[#BABABA]">FUTAMINA</p>
            </div>
        </div>
    </div>
}

export default PartnerLand