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
    const [credentails , setCredentaial] = useState(false)

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
            navigate('/signin');
            console.log("SignIn Error" , e);
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
        <div>
            <img src="" alt="Image" />
            <h1>{credentails.username}</h1>
            <h1>{credentails.email}</h1>
            <p>{credentails.bio}</p>
        </div>

    )
}
export default Profile;