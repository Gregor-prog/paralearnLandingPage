import img from "../assets/Rectangle 334.png"
function Blog(){
    return <div className="my-[40px] w-[90%] relative flex flex-col items-center">
        <p className="font-bold text-[45px] text-[#272643] text-center m-[10px]">Latest Blog Posts</p>

        <div className="blur-sm h-[72px] w-[72px] bg-[#F53838] text-[#F53838] rounded-full absolute left-[-40px] top-[300px] z-[-1]">o</div>


        <div className="sm:h-[496px] flex sm:flex-row items-center justify-evenly flex-col h-auto">
             <div className="sm:h-[496px] sm:w-[31%] w-[88%] my-[20px] sm:m-0 bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={img} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">Nulla eu aliquam fringilla tincidunt</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Nunc ut semper felis egestas donec purus, sollicitudin. Cras arcu viverra ullamcorper quam amet. Nulla blandit maecenas mattis sed. Tortor aenean volutpat nullam consectetur in. Tellus nisl nunc risus purus venenatis, scelerisque faucibus <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[31%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={img} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">Nulla eu aliquam fringilla tincidunt</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Nunc ut semper felis egestas donec purus, sollicitudin. Cras arcu viverra ullamcorper quam amet. Nulla blandit maecenas mattis sed. Tortor aenean volutpat nullam consectetur in. Tellus nisl nunc risus purus venenatis, scelerisque faucibus <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>

            <div className="sm:h-[496px] sm:w-[31%] w-[88%] my-[20px] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center  p-[20px]">
                        <img src={img} alt="" />
                        <h1 className="text-[20px] font-bold text-[#272643] text-left my-[20px]">Nulla eu aliquam fringilla tincidunt</h1>
                        <p className="text-[#4C4A82] text-[14px] font-semibold text-left">
                        Nunc ut semper felis egestas donec purus, sollicitudin. Cras arcu viverra ullamcorper quam amet. Nulla blandit maecenas mattis sed. Tortor aenean volutpat nullam consectetur in. Tellus nisl nunc risus purus venenatis, scelerisque faucibus <span className="text-[#F53838]">read more..........</span>
                        </p>
            </div>  

        </div>

    </div>
}

export default Blog