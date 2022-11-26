import React from "react";
import { useState } from "react";

export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = event => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("here")
        console.log("email: ",email);
        console.log("password: ",password);
    }
    return(
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="/static/images/finadvice.jpeg"
                            className="w-full"
                            alt="FinAdvice"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <h1 className="flex text-5xl items-center mb-6"> Welcome to FinAdvice!</h1>
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        onChange={handleEmailChange}
                                        value={email}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        onChange={handlePasswordChange}
                                        value={password}
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <a
                                        href="#!"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                        >Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={handleSubmit}
                                >
                                Sign in
                                </button>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    );



}