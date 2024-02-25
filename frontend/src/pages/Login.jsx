import { useContext, useState } from 'react'
import axiosClient from '../axiosClient'
import { AuthenticationContxt } from '../context/AuthenticationContxt'

const Login = () => {
     const [form, setForm] = useState({
          email: '',
          password: ''
     })
     const { setToken } = useContext(AuthenticationContxt)

     const handeFormChange = (e) => {
          const { name, value } = e.target
          setForm({ ...form, [name]: value })
     }

     const handleSubmit = (e) => {
          e.preventDefault();

          axiosClient.post('/login', form)
               .then(({ data }) => {
                    setToken(data.token)

               }).catch((error) => {
                    console.log(error)
               })
     }

     return (
          <div className='p-4 bg-white space-y-3 text-slate-800 rounded w-[30%] flex flex-col items-center shadow-md '>

               <div>
                    <p className='font-bold text-md'>Login To Access Your Account</p>
               </div>

               <form onSubmit={handleSubmit} className='w-full space-y-3'>

                    {/* email address */}
                    <div className='w-full space-y-2'>
                         <p>Email Address</p>
                         <input type="text"
                              name="email"
                              required
                              onChange={handeFormChange}
                              className='p-2 border border-slate-500 focus:outline-none w-full' />
                    </div>

                    {/* email address */}
                    <div className='w-full space-y-2'>
                         <p>Password</p>
                         <input type="password"
                              name='password'
                              required
                              onChange={handeFormChange}
                              className='p-2 border border-slate-500 focus:outline-none w-full' />
                    </div>

                    {/* button */}
                    <div className='w-full'>
                         <button type='submit' className='bg-slate-600 text-white rounded shadow  p-2 w-full'>Login</button>
                    </div>
               </form>

          </div>
     )
}

export default Login