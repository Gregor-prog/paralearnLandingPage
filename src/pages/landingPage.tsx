import HeaderLand from "../components/headerLand"
import Welcome from "../components/welcome"
import PartnerLand from "../components/partnerLand"
import How from "../components/howItWorks"
import Plans from "../components/plans_pricing"
import Features from "../components/Features"
import Review from "../components/studentSay"
import Blog from "../components/blogPost"
import AccordionDemo from "../components/accordion"
import Footer from "../components/footer"
import {motion} from "framer-motion"
function LandingPage(){
    return <div className="flex flex-col items-center w-[100vw]">
        <div id="1" className="sm:bg-gradient-to-b from-[#FFEDED] to-[white] w-[100%] h-[844px] flex flex-col items-center">
        
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-[100%]"
      >
        <HeaderLand/>
      </motion.div>
            <Welcome/>
        </div>

        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full"
      >
                <PartnerLand/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }} // Only animate once
        className="w-[100%]"
      >
        <How/>
      </motion.div>




        <Plans/>
        <Features/>
        <Review/>
        <Blog/>
        <AccordionDemo/>
        <Footer/>
    </div>
}

export default LandingPage