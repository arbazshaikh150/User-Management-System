import { useEffect, useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";


// Functional Component Should not be async 
function Profile(){
    const navigate = useNavigate();
    const URL = "http://localhost:5000";
    // URL = URL + location.pathname;

    // Hamare pass username , email , bio hi aayega
    const [credentails , setCredentaial] = useState({})

    useEffect(() => {
        getUser();
    } , [])
    
    // Query param se hame uska username mil jayega
    // Hame bas backend par se uska details lekar dena hai
    const getUser = async () => {
        try{
            const response = await axios({
                method : 'get', // Default
                url : URL + '/api/auth/username' ,
                withCredentials : true,
                // Data bas post method par hi aayega
            });

            if(response.data.success){
                setCredentaial(response.data.user);
            }
        }
        catch(e){
            console.log("Credentials --> " , credentails);
            console.log("SignIn Error" , e);
            navigate('/signin');
        }

    }

    // const response = await axios({
    //     method : 'get', // Default
    //     url : URL ,
    //     withCredentials : true,
    //     // Data bas post method par hi aayega
    // })
    // console.log("Url is : " , URL);
    // console.log("response is : " , response);

    // try{
    //     setCredentaial({
    //         ...credentails,
    //         username : response.user.username,
    //         email : response.user.email,
    //         bio : response.user.bio,
    //     })
    // }
    // catch(e){
    //     toast.error('Some Error Occured' , e.data.message);
    // }


    return (
        <div className="h-[100vh] flex flex-col gap-5 justify-center items-center">
            <img className="w-[30vh] rounded-lg " src="https://i.ibb.co/y5tB0j5/Arbaz-shaikh.jpg" alt="Image" />
            <h1 className="font-bold text-black text-lg tracking-wider">{credentails.username}</h1>
            <h1 className="font-bold text-black text-lg tracking-wider">{credentails.email}</h1>
            <p className="font-semibold text-black text-lg tracking-wider">{credentails.bio}</p>
        </div>

    )
}
export default Profile;