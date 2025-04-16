'use client'; 


import Logo from '../images/logo.jpeg'; // Ensure you're importing the image correctly

function Header() { // Capitalize class name
  
    return (
      <div>
        <div className='flex justify-between items-center  p-4'>
        <div className='h-[51px] w-[108px] flex justify-start items-center  bg-white'>
            <img src="/images/logo.jpeg" alt="Logo" className="h-full w-full object-cover" /> 
        </div>
        <div>
            <ul className='text-[15px] flex gap-4 font-bold'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>Contact us</li>
                <li>Advertise</li>
            </ul>
            <input type="text" placeholder="Search.."></input>
        </div>
      </div>
      
      </div>
    )
  
}

export default Header; //