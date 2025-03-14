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

        <div className="sm:h-[436px] flex sm:flex-row items-center my-[20px] sm:m-0 justify-evenly flex-col h-auto">
             <div className="sm:h-[345px] h-[430px] sm:w-[31%] w-[80%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly p-[20px]">
                        <img src={stars} alt="review" />
                        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
                        The learning experience was truly exceptional. The lessons were well-structured, and the instructors were always available to help. I now feel more confident in my skills.
                        </p>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <img src={adeleke} alt="" />
                            <div>
                                <h1 className="text-[20px] font-bold text-[#272643]">Adetayo Adeleke</h1>
                                <p className="text-[16px] font-semibold text-[#272643]">University of Lagos</p>
                            </div>
                        </div>
            </div>

            <div className="sm:h-[345px] h-[430px] sm:w-[31%] w-[80%] my-[20px] sm:m-0 bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly p-[20px]">
                        <img src={stars} alt="review" />
                        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
                        I really enjoyed the hands-on approach in this course. It helped me understand complex topics in a simple and engaging way. Highly recommend!
                        </p>
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <img src={apan} alt="" />
                            <div>
                                <h1 className="text-[20px] font-bold text-[#272643]">Mary Akpan</h1>
                                <p className="text-[16px] font-semibold text-[#272643]">University of Ibadan</p>
                            </div>
                        </div>
            </div>

            <div className="sm:h-[345px] h-[430px] sm:w-[31%] w-[80%] my-[20px] sm:m-0 bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly p-[20px]">
                        <img src={stars} alt="review" />
                        <p className="text-[16px]  text-[#272643] my-[10px] w-[80%]">
                        The curriculum was well-designed, and the real-world projects made the learning process even more valuable. I feel well-prepared for my future career.
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
