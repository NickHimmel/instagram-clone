import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import logo from '../images/logo.png';
import avatar from '../images/avatars/blue.jpg';

function Header() {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);

    return (
        <header className="h-16 bg-white border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items">
                        <h1>
                            <Link to={ROUTES.DASHBOARD} aria-label="Home">
                                <img src={logo} alt="Instagram Logo" className="mt-2 w-6/12" />
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray text-center flex items-center align-items">
                        {user ? (
                            <>
                                <Link to={ROUTES.DASHBOARD} aria-label="Home">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 mr-6 text-black cursor-pointer">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </Link>
                                <button
                                    type="button"
                                    title="Sign Out" 
                                    className="font-bold text-blue-500 text-sm" 
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            firebase.auth().signout();
                                        }
                                    }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 mr-6 text-black cursor-pointer">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className="flex items-center cursor-pointer">
                                        <Link to={`/p/${user.displayName}`}>
                                            <img 
                                                className="rounded-full h-8 w-8 flex" 
                                                src={avatar} 
                                                alt={`${user.displayName}`}/>
                                        </Link>
                                    </div>
                            </>
                        ) : (
                            <>
                                <Link to={ROUTES.LOGIN} aria-label="Login">
                                    <button 
                                        type="button"
                                        className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8 "
                                        >
                                            Log In
                                        </button>
                                </Link>
                                <Link to={ROUTES.SIGN_UP} aria-label="Signup" className="ml-3">
                                    <button 
                                        type="button"
                                        className="font-bold text-sm rounded text-blue-500 w-20 h-8"
                                    >
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;