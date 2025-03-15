import { useState } from "react"

function Login(){
    const [Username, setUsername] = useState("")
    const [password, setpassword] = useState("")

    function submit(){

    }


    return <div >
        <form onSubmit={submit} className=" sm:w-[50%] flex flex-col items-center">
            <h1 className="font-bold text-[45px] text-[#272643] my-[40px]">Welcome Back</h1>
            <input type="text" value={Username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" className="w-[503px] h-[62px] p-[10px] border-[1px] border-[#F53838] mb-[40px]"/>
            <input type="password" value={password} onChange={(e) => {setpassword(e.target.value)}} placeholder="Password" className="w-[503px] h-[62px] p-[10px] border-[1px] border-[#F53838]"/>
            <div className="flex flex-row items-center justify-between w-[503px] font-bold text-[#272643]">
                <div className="flex flex-row">
                    <input type="checkbox" name="" id="" className="mx-[8px]"/>
                    <p>Remember Me</p>
                </div>
                <a href="">Forgot Password?</a>
            </div>

            <button className="w-[503px] h-[52px] bg-[#F53838] rounded-[6px] text-[16px] font-semibold text-white my-[90px]">Login</button>

        </form>
    </div>
}

export default Login