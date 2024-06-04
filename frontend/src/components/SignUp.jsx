import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignUp(){
    const navigate = useNavigate();
    // Writing the logic for sigUp
    // Storing the credentails
    // Backend ka url dena hai
    const URL = "http://localhost:5000";
    const [credentails , setCredentaial] = useState({
        name : "",
        username : "",
        email : "",
        password : "",
        bio : ""
    })
    // Handle the registration
    const handleSignup = async (e) => {
        e.preventDefault(); // Form ke default behaviour ko hata dega
        console.log(credentails);
        // Storing it in database
        try{
            // Api call
            const response = await axios({
                method : "post",
                url : URL + '/api/auth/signup',
                withCredentials : true,
                data : credentails
            })

            if(!response){
                toast.error("Something Went Wrong");
                return 0;
            }
            setCredentaial({
                ...credentails ,
                name : "",
                username : "",
                email : "",
                password : "",
                bio : ""
            })
            if(response.data.success){
                toast.success("User Registered SuccessFully");
                navigate("/signup");
            }

            
        }
        catch(e){
            toast.error(e.message);
        }
    }

    return (
        <div className="h-[100vh] text-black mx-auto bg-white flex flex-col justify-center items-center border ">
            <form action="" onSubmit={(e) => handleSignup(e)} className="flex flex-col gap-2 justify-center items-center pt-5 pb-10 px-10 border shadow-[0_0_10px_black] w-fit">
                <h1 className="font-semibold text-xl cursor-pointer hover:text-2xl transiton-all ease-in-out duration-700"> Instagram SignUp </h1>
                <label htmlFor="me" className="text-md cursor-pointer w-full font-medium">
                    Name : 
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="text" name="me" id="me" placeholder="Name"
                    onChange={(e) => setCredentaial({...credentails , name : e.target.value})} 
                    
                    required/>
                </label>
                <label htmlFor="userName" className="text-md cursor-pointer w-full font-medium">
                    Username : 
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded"  type="text" name="userName" id="userName" placeholder="Name" 
                    onChange={(e) => setCredentaial({...credentails , username : e.target.value})} 
                    required/>
                </label>
                <label htmlFor="email" className="text-md cursor-pointer w-full font-medium">
                    Email :
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="email" name="email" id="email" placeholder="Email" 
                    onChange={(e) => setCredentaial({...credentails , email : e.target.value})} 
                    required />
                </label>
                <label htmlFor="password" className="text-md cursor-pointer w-full font-medium">
                    Password : 
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="password" name="password" id="password" placeholder="Password" 
                    onChange={(e) => setCredentaial({...credentails , password : e.target.value})} 
                    required />
                </label>
                <label htmlFor="bio" className="text-md cursor-pointer w-full font-medium">
                    Bio : <br />
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="text" name="bio" id="bio" placeholder="Enter Bio" 
                    onChange={(e) => setCredentaial({...credentails , bio : e.target.value})} 
                    required />
                </label>
                {/* Handle the sign Up using the express backend (using mongodb) */}
                <button type="submit" className="w-full btn-primary bg-blue-500 rounded py-1 px-1 text-white hover:bg-blue-600" >Sign Up</button>
                <div>
                    <span>Already Have an Account ? </span>
                    <Link className="font-medium " to="/signin"> Log In</Link>
                </div>
            </form>

        </div>
    )
}
export default SignUp;