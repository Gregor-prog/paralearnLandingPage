import stars from "../assets/Group 1353.png"
import adeleke from "../assets/Ellipse 253.png"
import apan from "../assets/Ellipse 255.png"
import Ogbe from "../assets/Ellipse 256.png"
import dot from "../assets/Group 1356.png"
function Review(){
    return <div className="my-[40px] w-[90%] relative flex flex-col items-center">
        <p className="font-bold text-[45px] text-[#272643] text-center m-[10px]">What our students say</p>


        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute left-[1070px] top-[200px] z-[-1] ">o</div>
        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute left-[-40px] top-[300px] z-[-1]">o</div>


        <div className="h-[436px] flex flex-row items-center justify-evenly ">
             <div className="h-[345px] w-[31%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly p-[20px]">
                        <img src={stars} alt="review" />
                        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
                        Nunc ut semper felis egestas donec purus, sollicitudin. Cras arcu viverra ullamcorper quam amet. Nulla blandit maecenas mattis sed. Tortor aenean volutpat nullam consectetur in. Tellus nisl nunc risus purus venenatis, scelerisque faucibus 
                        </p>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <img src={adeleke} alt="" />
                            <div>
                                <h1 className="text-[20px] font-bold text-[#272643]">Adetayo Adeleke</h1>
                                <p className="text-[16px] font-semibold text-[#272643]">University of Lagos</p>
                            </div>
                        </div>
            </div>

            <div className="h-[345px] w-[31%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly p-[20px]">
                        <img src={stars} alt="review" />
                        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
                        Nunc ut semper felis egestas donec purus, sollicitudin. Cras arcu viverra ullamcorper quam amet. Nulla blandit maecenas mattis sed. Tortor aenean volutpat nullam consectetur in. Tellus nisl nunc risus purus venenatis, scelerisque faucibus 
                        </p>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <img src={apan} alt="" />
                            <div>
                                <h1 className="text-[20px] font-bold text-[#272643]">Mary Akpan</h1>
                                <p className="text-[16px] font-semibold text-[#272643]">University of Ibadan</p>
                            </div>
                        </div>
            </div>

            <div className="h-[345px] w-[31%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly p-[20px]">
                        <img src={stars} alt="review" />
                        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
                        Nunc ut semper felis egestas donec purus, sollicitudin. Cras arcu viverra ullamcorper quam amet. Nulla blandit maecenas mattis sed. Tortor aenean volutpat nullam consectetur in. Tellus nisl nunc risus purus venenatis, scelerisque faucibus 
                        </p>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <img src={Ogbe} alt="" />
                            <div>
                                <h1 className="text-[20px] font-bold text-[#272643]">Chidera Ogbe </h1>
                                <p className="text-[16px] font-semibold text-[#272643]">University of Nigeria</p>
                            </div>
                        </div>
            </div>
        </div>
        <img src={dot} alt="" />
    </div>
}
export default Review