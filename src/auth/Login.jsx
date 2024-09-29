import React from 'react'

import image from '../assets/register.png'
import { useNavigate } from 'react-router-dom'

function Login({ className = '' }) {
const navigate = useNavigate();

const handleRedirect = () =>{
navigate('/üye-ol');
}
return (
<div className=" min-h-screen bg-gray-100 p-4">
    <div className="flex flex-col md:flex-row items-center justify-center md:container md:mx-auto p-8 ">
        <div className="md:w-1/2 mb-4 md:mb-0 mr-8">
            <img src={image} alt="Form Görseli" className="w-full rounded-lg shadow-lg " />
        </div>
        <div className={`w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-[600px] ${className}`}>

            <form className="space-y-4">
                <h3 className="text-center text-green-500 text-4xl font-medium	">
                    Giriş Yap
                </h3>


                <div className="form-group">
                    <label htmlFor="phone" className="block text-gray-700">Telefon Numarası</label>
                    <input type="tel" id="phone" name="phone" required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="form-group">
                    <label htmlFor="Password" className="block text-gray-700">Şifre</label>
                    <input type="Password" id="Password" name="Password" required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
                    Giriş Yap
                </button>
            </form>

            <div className="pt-10 flex justify-end">

                <a onClick={handleRedirect} className="space-y-4 text-green-500 text-lg font-medium" href="">
                    Üye Ol
                </a>
            </div>
        </div>
    </div>
</div>

)
}

export default Login