import React from 'react'

function Footer() {
  return (
    <div className='p-2 flex flex-col gap-4'>

      {/* search */}

      <div className='flex flex-wrap items-center rounded-2xl bg-gray-200 p-2'>
        <button className='mr-2'>
          <img className='w-4 h-4' src='https://cdn-icons-png.freepik.com/256/54/54481.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid' alt='search'/>
        </button>
        <input className='bg-gray-200 text-black p-1 rounded-md outline-none' type='text' placeholder='Search' />
      </div>



      {/* follow */}

      <div className='flex flex-col p-2 border border-gray-400 rounded-xl'>
          <div className='p-2'>
            <p className='font-bold text-lg'>Who to follow</p>
          </div>

          {/* <div className='flex flex-wrap p-2'> */}
              <div className='flex flex-wrap justify-between py-2'>
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
          {/* </div> */}

          <button className='p-2 text-blue-400 text-sm text-left'>
              show more
          </button>
          
      </div>
    </div>
  )
}

export default Footer