import { useState,useRef } from "react"
import map from "../assets/Screenshot (10) 1.png"
import location from "../assets/ic_baseline-location-on.png"
import email from "../assets/dashicons_email-alt.png"
import phone from "../assets/bi_telephone-outbound-fill.png"
import HeaderLand from "@/components/headerLand"
import Footer from "@/components/footer"
import { Toaster, toast } from 'sonner';
import EmailJS from "@emailjs/browser"
function Contact(){
        const [Username, setUsername] = useState("")
        const [text,settext] = useState("")
        const [Email,setEmail] = useState("")
        const form = useRef< HTMLFormElement>(null)

        async function submit(e:any){
            e.preventDefault()
            try {
                if(Username == "" || Username == null){
                    throw new Error("username not found");
                }
                if(text == "" || text == null){
                    throw new Error("feedback field is empty");
                }
                if(Email == "" || Email == null){
                    throw new Error("Email field is empty");
                }

                
                EmailJS.sendForm("service_1l4b0o8","template_db30gzb", form.current!, "K7GEK8OM6BBFQ0Idl")
                .then(() => toast.success("Thanks for the feedback"))
                .catch(() =>  toast.error("couldn't send feedback") )
                
                setUsername("")
                settext("")
            } catch (error) {
                if(error){
                    toast.error("couldn't send feedback")
                }
                
            }
                
            
            

        }
    return <div className="flex flex-col items-center">
        <HeaderLand/>
        <Toaster richColors position="top-right" />
        <div className="flex sm:flex-row flex-col items-center justify-evenly w-[90%]">
            <div>
                <img src={map} alt="" />
                <div className="grid grid-cols 2">
                <p className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={location} alt=""/>4 Cardoso St, Mushin Lagos </p>
                <p className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={email} alt=""/>info@parakletus.com.ng </p>
                <p className="flex items-center  w-[90%] my-[9px]" ><img className="mx-[10px]" src={phone} alt=""/>(+234)8148876125</p>
                
                </div>
            </div>

            <form onSubmit={(e) => submit(e)} ref={form} className=" sm:w-[50%] flex flex-col items-center ">
            <h1 className="font-bold text-[45px] text-[#272643] my-[40px]">drop your Feedback</h1>
            <input type="text" name="name" value={Username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" className="sm:w-[503px] w-[300px] h-[62px] p-[10px] border-[1px] border-[#F53838] mb-[20px]"/>
            <input type="Email" name="Email" value={Email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" className="sm:w-[503px] w-[300px] h-[62px] p-[10px] border-[1px] border-[#F53838] mb-[20px]"/>
            <textarea value={text} name="message" onChange={(e) => {settext(e.target.value)}} className="h-[303px] sm:w-[503px] w-[300px] border-[1px] border-[#272643] mt-[30px] p-[20px]" placeholder="your FeedBack..."/>

            <button  className="sm:w-[503px] w-[300px] h-[52px] bg-[#F53838] rounded-[6px] text-[16px] font-semibold text-white my-[50px]">Message</button>

        </form>


        </div>
        <Footer/>
    </div>
}

export default Contact