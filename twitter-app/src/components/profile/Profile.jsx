import React from 'react'
import {Link} from 'react-router-dom'
function Profile() {
  return (
    <div>
      {/* header username */}

      <div className='flex flex-wrap p-4 gap-8 border-b border-b-gray-400'>
        <div className='flex flex-wrap items-center'>
        <Link to='/'><img className='w-7 h-7 ' src={`https://cdn-icons-png.freepik.com/256/10513/10513357.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='back'/></Link>
        </div>
        <div className='flex flex-col'>
          <p className='text-lg font-semibold'>Arsh</p>
          <p>0 posts</p>
        </div>
      </div>

      {/* user profile */}
      <div className='flex flex-col items-center border-b border-b-gray-400 p-4'>
        <div>
          <img className='w-18 h-18 rounded-full' src={`https://cdn-icons-png.freepik.com/256/146/146018.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='img'/>
        </div>
        <p className='text-lg font-semibold'>Arsh</p>
        <p className=''>@Arsh_sharma_25</p>
      </div>

      {/* follower following edit */}

      <div className='flex flex-row justify-between p-4 border-b border-b-gray-400'>
        <div className='flex flex-wrap gap-4'>
        <div className='flex flex-wrap gap-1'>
          <p className='font-semibold'>10</p>
          <p>Following</p>
        </div>
        <div className='flex flex-wrap gap-1'>
          <p className='font-semibold'>0</p>
          <p>Followers</p>
        </div>
        </div>
        <button className='p-2 border border-gray-400 rounded-lg'>
          Edit
        </button>
      </div>

      {/* who to follow */}

      <div className='flex flex-wrap justify-between p-4'>
                <div className='flex flex-wrap gap-2'>
                  <img className='w-8 h-8 flex flex-wrap items-center' src={`https://cdn-icons-png.freepik.com/256/146/146018.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='img'/>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-sm'>Bill Gates</p>
                    <p className='text-sm text-gray-400'>@BillGates</p>
                  </div>
                </div>

                <button className='flex flex-wrap p-2 rounded-2xl text-white bg-black'>
                  Follow
                </button>
              </div>

    </div>
  )
}

export default Profile