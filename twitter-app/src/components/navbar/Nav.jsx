import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className="flex flex-col gap-8">
        <ul className='flex flex-col'>
            <li className='flex w-max h-16 p-4 cursor-pointer hover:bg-gray-200 rounded-full'>
              <img className='w-8'
              src={`https://cdn-icons-png.freepik.com/256/11823/11823292.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`}/>
            </li>

            <Link to='/'><li className='inline-flex gap-4 w-max h-16 p-4 cursor-pointer hover:bg-gray-200 rounded-full'>
              <img className='w-7 h-7' 
              src={`https://cdn-icons-png.freepik.com/256/61/61972.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt= "home"/>
              <p className='text-xl'>Home</p>
            </li></Link>

            <li className='inline-flex gap-4 w-max h-16 p-4 cursor-pointer hover:bg-gray-200 rounded-full'>
              <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/3917/3917132.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='Explore'/>
              <p className='text-xl'>Explore</p>
            </li>

            <li className='inline-flex gap-4 w-max h-16 p-4 cursor-pointer hover:bg-gray-200 rounded-full'>
              <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/54/54810.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='noti'/>
              <p className='text-xl'>Notifications</p>
            </li>

            <li className='inline-flex gap-4 w-max h-16 p-4 cursor-pointer hover:bg-gray-200 rounded-full'>
              <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/58/58683.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='Msg'/>
              <p className='text-xl'>Messages</p>
            </li>
            
            <li className='inline-flex gap-4 w-max h-16 p-4 cursor-pointer hover:bg-gray-200 rounded-full'>
              <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/13924/13924070.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='Profile'/>
              <Link className='text-xl' to='profile'>Profile</Link>
            </li>

            <li className='inline-flex gap-4 w-max h-max p-4'>
                <button className="bg-blue-500 rounded-full px-24 py-4 text-white hover:bg-blue-600 active:bg-blue-700">
                  Post
                </button>
            </li>
        </ul>

{/* // profile */}

      <div className='grid grid-cols-[auto,1fr,auto] gap-2 items-center p-4'>

        <img src={`https://cdn-icons-png.freepik.com/256/146/146018.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='prof' className='col-span-1'>
        </img>

        <div className='grid grid-rows-2'>
          <p className='p-1'>
            Arsh
          </p>
          <p className='p-1'>
            @Arsh_sharma_25
          </p>
        </div>

        <div className='p-2'>
          <img className='w-4 h-4' src={`https://cdn-icons-png.freepik.com/256/17/17764.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='...'>
          </img>
        </div>

      </div>


    </div>
  )
}

export default Nav