import img from "../assets/Rectangle 334.png"
function Blog(){
    return <div className="my-[40px] w-[90%] relative flex flex-col items-center">
        <p className="font-bold text-[45px] text-[#272643] text-center m-[10px]">Latest Blog Posts</p>

        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute left-[-40px] top-[300px] z-[-1]">o</div>

        <div className="sm:h-[496px] flex sm:flex-row items-center justify-evenly flex-col h-auto">
             <div className="sm:h-[496px] sm:w-[31%] w-[88%] my-[20px] sm:m-0 bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={img} alt="Blog Post Image" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">The Future of AI in Healthcare</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Artificial intelligence is revolutionizing the healthcare industry by enabling early disease detection, personalized treatment plans, and improving patient outcomes. Read about the latest advancements and what the future holds for AI in medicine. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[31%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={img} alt="Blog Post Image" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">How Renewable Energy is Shaping Our World</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        With growing concerns about climate change, renewable energy sources like solar and wind power are gaining traction. Explore how these sustainable energy solutions are transforming the way we power our homes and industries. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[31%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={img} alt="Blog Post Image" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">The Rise of Smart Homes</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Smart home technology is making everyday life more convenient and efficient. From voice-controlled assistants to automated security systems, find out how smart homes are redefining modern living. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>  
        </div>
    </div>
}

export default Blog
