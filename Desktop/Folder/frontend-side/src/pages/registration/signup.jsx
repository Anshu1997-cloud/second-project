import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import { BASE_URL } from '../../helper';


function Signup() {
    // const [backendData ,  setBackendData]  = useState([{}])
   const[username, setUserName] = useState("");
   const[email , setEmail] = useState("");
   const[password, setPassword] = useState("");


//    useEffect(() => {
//     fetch('http://localhost:8080/register')
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, []);

   const context = useContext(myContext);
   const{loading, setLoading} = context;

   const signup = async() => {
    setLoading(true)
       if(username === "" || email === "" || password === ""){
         return toast.error("All fields are required")
       }
       try{
         const response = await fetch(`${BASE_URL}/register` ,{
              method: 'POST',
              headers: {
                 'Content-Type' : 'application/json',
              },
              body: JSON.stringify({
                 username,
                 email,
                 password,
              }),
         }); 
         if(response.ok){
             const newUser = await response.json();
             console.log(newUser)
             toast.success("Signup successful")
             setLoading(false)
         }else{
             toast.error('Failed to create a new user')
             setLoading(false)
         }
       }catch(error){
          console.log('Error during signup:' , error)
       }
   };

    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <FaSpinner className="animate-spin text-3xl text-white" />} {/* Loader icon */}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                        name='username'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='username'
                    />
                </div>
                <div>
                    <input type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={signup}
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup