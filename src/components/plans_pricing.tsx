import { IoMdCheckmarkCircleOutline } from "react-icons/io";
function Plans(){
    return <div className="sm:h-[535px] h-auto w-[90%] my-[180px]">
        <p className="font-bold text-[45px] text-[#272643] text-center m-[50px]">Plans & Pricing</p>


        <div className="sm:h-[436px] h-auto flex sm:flex-row items-center justify-evenly flex-col">
            <div className="h-[436px] sm:w-[30%] w-[90%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly">
                <p className="font-bold text-[26px] text-[#272643]">Free</p>
                <ul className="flex flex-col items-center justify-evenly h-[40%]">
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                </ul>
                <p className="font-bold text-[26px] text-[#272643]">Free</p>
                <button className="h-[52px] w-[165px] rounded-[80px] bg-[#BABABA] text-white font-bold hover:bg-[#F53838]">
                    Current Plan
                </button>
            </div>


            <div className="h-[500px]  sm:w-[33%] w-[90%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly mt-[30px]">
                <div className="bg-[#F53838] font-bold text-[16px] text-[white] h-[54px] w-[100%] flex flex-row items-center justify-center">
                    Most Popular
                </div>
                <p className="font-bold text-[26px] text-[#272643]">Basic Plan</p>
                <ul className="flex flex-col items-center justify-evenly h-[40%]">
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                </ul>
                <p className="font-bold text-[26px] text-[#272643]">N3,000</p>
                <button className="h-[52px] w-[165px] rounded-[80px] bg-[#BABABA] text-white font-bold hover:bg-[#F53838]">
                    Current Plan
                </button>
            </div>


            <div className="h-[436px] sm:w-[30%] w-[90%] bg-[#FAFDFF] shadow-xl shadow-[#f538383f] flex flex-col items-center justify-evenly sm:m-0 my-[30px]">
                <p className="font-bold text-[26px] text-[#272643]">Pro Plan</p>
                <ul className="flex flex-col items-center justify-evenly h-[40%]">
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                    <li className="flex items-center text-[18px] text-[#393939]"><IoMdCheckmarkCircleOutline className="text-[#F53838] mx-[10px]"/>Lorem ipsum dolor sit amet</li>
                </ul>
                <p className="font-bold text-[26px] text-[#272643]">N5,000</p>
                <button className="h-[52px] w-[165px] rounded-[80px] bg-[#BABABA] text-white font-bold hover:bg-[#F53838]">
                    Current Plan
                </button>
            </div>
        </div>
    </div>
}

export default Plans