import { Link } from "react-router-dom";

function SignUp(){
    // Writing the logic for sigUp
    return (
        <div className="h-[100vh] text-black mx-auto bg-white flex flex-col justify-center items-center border ">
            <form action="" className="flex flex-col gap-2 justify-center items-center pt-5 pb-10 px-10 border shadow-[0_0_10px_black] w-fit">
                <h1 className="font-semibold text-xl cursor-pointer hover:text-2xl transiton-all ease-in-out duration-700"> Instagram SignUp </h1>
                <label htmlFor="me" className="text-md cursor-pointer w-full font-medium">
                    Name : 
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="text" name="me" id="me" placeholder="Name" required/>
                </label>
                <label htmlFor="userName" className="text-md cursor-pointer w-full font-medium">
                    Username : 
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded"  type="text" name="userName" id="userName" placeholder="Name" required/>
                </label>
                <label htmlFor="email" className="text-md cursor-pointer w-full font-medium">
                    Email :
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="email" name="email" id="email" placeholder="Email" required />
                </label>
                <label htmlFor="password" className="text-md cursor-pointer w-full font-medium">
                    Password : 
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="password" name="password" id="password" placeholder="Password" required />
                </label>
                <label htmlFor="bio" className="text-md cursor-pointer w-full font-medium">
                    Bio : <br />
                    <input className="bg-white shadow-[0_0_1px_black] w-full py-1 px-2 rounded" type="text" name="bio" id="bio" placeholder="Enter Bio" required />
                </label>
                {/* Handle the sign Up using the express backend (using mongodb) */}
                <button type="submit" className="w-full btn-primary bg-blue-500 rounded py-1 px-1 text-white hover:bg-blue-600" >Sign Up</button>
                <div>
                    <span>Already Have an Account ? </span>
                    <Link className="font-medium " to="/"> Log In</Link>
                </div>
            </form>

        </div>
    )
}
export default SignUp;