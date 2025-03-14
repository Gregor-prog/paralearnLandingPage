import unilag from "../assets/image 1.png"
import UI from "../assets/image 2.png"
import suka from "../assets/image 3.png"
import OAU from "../assets/image 4 (1).png"
import location from "../assets/ic_baseline-location-on.png"
import email from "../assets/dashicons_email-alt.png"
import globe from "../assets/Vector.png"
import HeaderLand from "../components/headerLand"
import Footer from "../components/footer"

function Institutions(){
    return <div className="w-[100%] flex flex-col items-center">
        <HeaderLand/>
        <p className="font-bold text-[45px] text-[#272643] text-center my-[30px]">INSTITUTIONS</p>
        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%] font-semibold">All institutions below have been registered with <b>ParaLearn</b>. Click on any institution to get
        course materials for any programme registered in that institution</p>
        <div className="sm:h-[496px] flex sm:flex-row items-center justify-evenly flex-col h-auto w-[95%] mb-[40px]">
            <div className="sm:h-[490px] sm:w-[24%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px] justify-evenly">
                    <img src={unilag} alt="" />
                    <h1 className="text-[25px] font-semibold text-[#272643] my-[10px]">University of Lagos</h1>
                    <ul className="text-[14px]  text-[#272643] my-[20px] w-[100%]">
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={location} alt=""  />University Rd,akoka, Yaba</li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={globe} alt=""  />www.unilag.edu.ng</li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={email} alt=""  />Communicationunit@unilag.edu.ng </li>
                    </ul>
            </div>

            <div className="sm:h-[490px] sm:w-[24%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center w-[95%] justify-evenly">
                    <img src={UI} alt="" />
                    <h1 className="text-[25px] font-semibold text-[#272643] my-[10px]">University of Ibadan</h1>
                    <ul className="text-[14px]  text-[#272643] my-[20px] w-[100%]">
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={location} alt=""  />Oduduwa Rd, Ibadan </li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={globe} alt=""  />www.ui.edu.ng </li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={email} alt=""  />mediaresources@mail.ui.edu.ng</li>
                    </ul>
            </div>


            <div className="sm:h-[490px] sm:w-[24%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px] justify-evenly">
                    <img src={suka} alt="" />
                    <h1 className="text-[25px] font-semibold text-[#272643] my-[10px]">University of Nigeria</h1>
                    <ul className="text-[14px]  text-[#272643] my-[20px] w-[100%]">
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={location} alt=""  />Nsukka - Onitsha Rd, Nsukka</li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={globe} alt=""  />www.unn.edu.ng </li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={email} alt=""  />customerservices.ict@unn.edu.ng</li>
                    </ul>
            </div>

            <div className="sm:h-[490px] sm:w-[24%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px] justify-evenly">
                    <img src={OAU} alt="" />
                    <h1 className="text-[25px] font-semibold text-[#272643] my-[10px]">Obafemi Awolowo University </h1>
                    <ul className="text-[14px]  text-[#272643] my-[20px] w-[100%]">
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={location} alt=""  />220005, Ife</li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={globe} alt=""  />oauife.edu.ng</li>
                        <li className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={email} alt=""  />counselling@oauife.edu.ng </li>
                    </ul>
            </div>
        </div>
        <Footer/>
    </div>
}
export default Institutions