import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'

// Main aim of this project is to build the function (separately) , and also getting familliar with the folder structure of react and express

function SignIn(){
    // State variable for holding the inputText
    // const [inputText , setInputText] = useState("");
    // Holds the credentials
    const navigate = useNavigate();
    // Backend ka url dena hai
    const URL = "http://localhost:5000";
    const [credentials , setCredentaial] = useState({username : "" , password : ""});
    const [isLoading , setIsLoading] = useState(false);
    // For handling the login
    const handleLogin = async (e) => {
        // Event (directly submit nhi hoga)
        e.preventDefault();
        setIsLoading(true);
        // Fetching and api call using axios
        // Can also use async thunk
        try{
            // Fetching
            const response = await axios({
                method : "post",
                url : URL + "/api/auth/signin",
                withCredentials : true,
                // Data bhejna bhi toh hai request mai
                data : credentials
            })
            setIsLoading(false);
            console.log(response);

            if(response.data.success){
                // Navigate them into me page
                navigate("/"); // Abb tak banaya nhi hu
                toast.success("Logged In SuccessFull");

            }
        }
        catch(e){
            console.log(e);
            setIsLoading(false);
            // I can use toast also
            toast.error('Some Error Occured , Please Enter the Correct Details');
        }
    }

    // We have to send the Form and path to home page
    return (
        <div className="h-[100vh] text-black mx-auto flex flex-col w-full justify-center items-center border ">
            <form action="" onSubmit={(e) => handleLogin(e)} className=" w-[65vh] h-[60vh] flex flex-col gap-5 justify-center items-center pt-5 pb-10 px-10 border shadow-[0_0_10px_black]">

                <h1 className="font-semibold text-xl cursor-pointer hover:text-2xl transiton-all ease-in-out duration-700">Instagram Login</h1>
                <label htmlFor="username" className="text-md cursor-pointer w-full font-medium"> Username : <br />

                 {/* Here we have on change function as well  */}
                <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="text" name="username" id="username" placeholder="Enter Your UserName"
                onChange={(e) => setCredentaial({...credentials , username : e.target.value})}
                required />
                </label>
                <label htmlFor="password" className="text-md cursor-pointer w-full font-medium"> Password : <br />
                <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="password" name="password" id="password" placeholder="Enter Your Password" onChange={(e) => setCredentaial({...credentials , password : e.target.value})}  required />
                </label>
                {/* We have to add logic on handling the user (Getting from database) and then showing them there homePage */}
                <button type="submit" className="w-full btn-primary bg-blue-500 rounded py-1 px-1 text-white hover:bg-blue-600" >Log in</button>
                <div className="mb-5">
                <span>Forgot Password ? </span>
                <Link to="/signup" className="font-medium "> Sign Up</Link>
            </div>
            </form>

        </div>
    )
}
export default SignIn