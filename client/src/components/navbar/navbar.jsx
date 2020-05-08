import React, { useState, useContext, useEffect } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { userContext } from "../../states/auth/auth.context";



export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [fullname, setFullname] = useState(false);

    const  isAuthenticated  = useAuth();
    const {state: {user}, dispatch} = useContext(userContext);

    
    useEffect(() => {
        if (user) {
            setFullname(user.fullname);
        }
        
        
    }, [user]);

    const Logout = () => {    
        dispatch({
            type:"LOGOUT_SUCCESS"
        });
    
    };


    return (
        <>
            <header className='bg-green-600 sm:flex  sm:items-center sm:px-4 sm:py-3 flex-wrap'>
                <div className='flex justify-between items-center px-4 py-3 flex-grow'>
                    <div>
                        <img className="h-12" src={logo}  alt="Logo"/>
                    </div>
                    <div className="flex sm:inline-block">
                        <div onClick = {() => setIsCartOpen(!isCartOpen)} className="flex flex-row cursor-pointer truncate p-2 px-4  rounded">
                            <div></div>
                            <div className="flex flex-row-reverse ml-2 w-full">
                                <div slot="icon" className="relative">
                                    <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">3</div>
                                    <svg className='feather feather-shopping-cart w-6 h-6 mt-2"block text-white hover:text-white focus:text-white focus:outline-none' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <button onClick = {() => setIsOpen(!isOpen)} className='block text-white hover:text-white focus:text-white focus:outline-none sm:hidden '>
                        <svg className="  h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {isOpen && <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>}
                            {!isOpen && <path  fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
                        </svg>
                        </button>
                    </div>
                </div>
                <nav className={`${isOpen? "block" : "hidden "} duration-500 px-2 pt-2 pb-4 sm:flex sm:p-0`}>
                    <Link className='block text-white px-2 py-1 font-semibold rounded hover:bg-green-400' to='/'>Home </Link>
                    { isAuthenticated && <Link className='block text-white px-2 py-1 font-semibold rounded hover:bg-green-400' to='/orders'>{fullname ? fullname : null} </Link>}
                    { isAuthenticated && <Link onClick = {() => Logout()} className='block text-white px-2 py-1 font-semibold rounded hover:bg-green-400' to='/login'>logout </Link>}
                    { !isAuthenticated && <Link className='block text-white px-2 py-1 font-semibold rounded hover:bg-green-400' to='/login'>Login </Link>}
                    { !isAuthenticated && <Link className='block text-white px-2 py-1 font-semibold rounded hover:bg-green-400' to='/signup'>Sign Up </Link>}
                    { isAuthenticated && <Link className='block text-white px-2 py-1 font-semibold rounded hover:bg-green-400' to='/signup'>{fullname ? fullname : null} </Link>}


                </nav>

            </header>

            <div className={ `${isCartOpen ? "trans" : "no-trans"} h-screen bg-white fixed bg-white z-50 overflow-auto top-0 right-0 w-75 sm:w-100 block transition-transform duration-500 ease-in-out`}>
                <div className=" sm:py-9 py-6 px-4 mb-5 flex justify-between items-center bg-gray-900">
                    <h3 className="text-white uppercase">Shopping Cart</h3>
                    <button className="bg-transparent border-none text-white text-sm flex items-center outline-none" onClick = {() => setIsCartOpen(!isCartOpen)}>
                        Close
                        <svg className="text-white pl-2" width="25" height="10" viewBox="0 0 514 28" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <rect width="514" height="28" rx="14" fill="white"/>
                        </svg>

                    </button>
                </div>

                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 1 sdasdsandjkahsdjlkabhdasdaDFAsfadfadfasfadfdf</div>
                        <div className="truncate">Product 1 description adaSFDAFASDFADFASDSFASDFASDFAFD</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 2</div>
                        <div className="truncate">Product 2 long description</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                        <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="px-2 py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                    <div className="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold truncate">Product 3</div>
                        <div className="truncate">Product 3 description</div>
                         <div className="text-gray-400 flex">
                            <button className='px-2 bg-green-600 outline-none focus:outline-none mr-2 text-white'> - </button>
                            <p> Qt: 2</p>
                            <button className='px-2 bg-green-600 outline-none focus:outline-none ml-2 text-white'> + </button>

                        </div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        $12.22
                    </div>
                </div>
                <div className="p-4 justify-center flex">
                    <button className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                        hover:bg-green-700 hover:text-green-100 
                        bg-green-100 
                        text-green-700 
                        border duration-200 ease-in-out 
                        border-green-600 transition">Checkout $36.66
                    </button>
                </div>
            </div>
        </>
    );
};