import { HiMagnifyingGlass } from 'react-icons/hi2';
import { BellIcon } from '@heroicons/react/24/solid';
// import Link from 'next/Link';
import { useEffect, useState } from 'react'

function Header() {

    //handling states, using react hook
    const [ isScrolled, setIsScrolled ] = useState(false)

    // when the component mounts
    useEffect(() =>{
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
        // empty dependenc is here because this shouldn't run everytime
        // it only should when the scrolling is going on
    },[]) 
    
    return (
        <header className={`${isScrolled && `bg-[#141414]`}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    width={100}
                    height={100}
                    className="cursor-pointor object-container" 
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Show</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
                
            </div>

            <div className="flex items-center space-x-4 text-sm font-light">
                <HiMagnifyingGlass className="hidden h-6 w-6 sm:inline"/>
                {/* will be shown on larger breakpoint*/}
                {/* will be hidden by default in phone*/}
                <p className="hidden ld:inline">Kids</p>
                <BellIcon className="h-6 w-6"/>
                {/*<Link href="/account">
                    <img 
                        src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                        height={100}
                        width={100}
                        classname="cursor-pointor rounded"
                    />
                </Link>*/}
                
                
            </div>
        </header>
    )

            
}

export default Header