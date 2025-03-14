import HeaderLand from "../components/headerLand"
import Welcome from "../components/welcome"
import PartnerLand from "../components/partnerLand"
import How from "../components/howItWorks"
import Plans from "../components/plans_pricing"
import Features from "../components/Features"
import Review from "../components/studentSay"
function LandingPage(){
    return <div className="flex flex-col items-center">
        <div id="1" className="bg-gradient-to-b from-[#FFEDED] to-[white] w-[100%] h-[844px] flex flex-col items-center">
            <HeaderLand/>
            <Welcome/>
        </div>
        <PartnerLand/>
        <How/>
        <Plans/>
        <Features/>
        <Review/>
    </div>
}

export default LandingPage