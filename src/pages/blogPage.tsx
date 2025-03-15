import HeaderLand from "@/components/headerLand"
import Footer from "@/components/footer"
import block from "../assets/blockchain.jpg"
import g from "../assets/5G.jpeg"
import el from "../assets/elearning.jpeg"
import AI from "../assets/AI.jpeg"
import renewable from "../assets/renewable.jpeg"
import smart from "../assets/smarthome.jpeg"
import { DialogDemo } from "@/components/Dialog"

// function sendEle(e:any){

// }


function BlogPage(){

    return <div className="my-[40px] w-[100%] relative flex flex-col items-center">
        <DialogDemo/>
        <HeaderLand/>
        <p className="font-bold text-[45px] text-[#272643] text-center m-[10px]">Latest Blog Posts</p>

        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute left-[-40px] top-[300px] z-[-1]">o</div>


        <div className="grid sm:grid-cols-3 w-[100%] grid-cols-1 align-self-center justify-self-center items-center">
             <div onClick={(e) => sendEle(e)}  className="sm:h-[496px] sm:w-[90%] self-center justify-center w-[88%] my-[20px] sm:m-0 bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={AI} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">The future of AI in healthcare</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Artificial intelligence is revolutionizing the healthcare industry by enabling early disease detection, personalized treatment plans, and improving patient outcomes. Read about the latest advancements and what the future holds for AI in medicine. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[90%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={renewable} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">How Renewable Energy is Shaping Our World</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        With growing concerns about climate change, renewable energy sources like solar and wind power are gaining traction. Explore how these sustainable energy solutions are transforming the way we power our homes and industries. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[90%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={smart} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">The Rise of Smart Homes</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Smart home technology is making everyday life more convenient and efficient. From voice-controlled assistants to automated security systems, find out how smart homes are redefining modern living. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>



            <div className="sm:h-[496px] sm:w-[90%] w-[88%] my-[20px] sm:m-0 bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={g} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">The Impact of 5G on Global Connectivity</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        The rollout of 5G technology is set to revolutionize internet speeds and connectivity worldwide. Discover how this next-generation network is transforming industries, from healthcare to entertainment. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[90%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={el} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">The Evolution of E-Learning Platforms</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Online education has become a cornerstone of modern learning. Learn how e-learning platforms are evolving to provide accessible, flexible, and personalized education for students worldwide. <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[90%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={block} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">The Role of Blockchain in Modern Finance</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Blockchain technology is reshaping the financial landscape by offering secure, transparent, and decentralized solutions. Explore how it is being used in cryptocurrencies, smart contracts, and beyond.<span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>  

        </div>

        <Footer/>

    </div>
}

export default BlogPage