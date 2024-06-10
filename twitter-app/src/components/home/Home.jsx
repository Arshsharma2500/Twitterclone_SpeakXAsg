import React, { useState } from 'react'

function Home() {

    const [like,setLike] = useState(0);

    const[list,setList] = useState("");
    const[todo,setTodo] = useState([]);

    const handleclick = (() => {
        setTodo([...todo,list]);
        setList("");
        
    })

    const handleDelete = (indexToDelete) => {
        const newTodo = todo.filter((_, index) => index !== indexToDelete);
        setTodo(newTodo);
      };


  return (
    <div>
        <header className='w-full flex flex-wrap border-b border-b-gray-400'>
            <button className='w-1/2 items-center py-4 hover:bg-gray-200'>
                For you
            </button>
            <button className='w-1/2 items-center py-4 hover:bg-gray-200'>
                Following
            </button>
        </header>

{/* // upload tweets */}
        <div className='flex flex-col justify-between h-max gap-2 p-4 border-b border-b-gray-400'>
            
                <div className='flex flex-row gap-2'>
                    <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/146/146018.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='prof'/>
                    <textarea value={list} onChange={(e) => (setList(e.target.value))}
                     className="w-full max-w-2xl min-h-[50px] border-none p-2 text-lg resize-none overflow-hidden box-border leading-normal no-scrollbar" rows="4" cols="60" placeholder="what's happing here?!">

                    </textarea>
                </div>

                <div className='flex flex-row justify-between'>
                    <button>
                    <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/14084/14084446.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='photo'/>
                    </button>
                    <button onClick={handleclick} 
                    className='py-2 rounded-full bg-blue-500 text-white px-4 active:bg-blue-600'>
                        Post
                    </button>
                </div>
        
        </div>

        {/* to do list for written post */}
        <div className='flex flex-col my-2 p-4'>
            <div>
                {todo.map((item,index)=>(<div className="flex items-center my-1" key={index}>
                    <div className='flex flex-col gap-2'>

                    <div className='flex flex-wrap justify-between w-full'>
                    <div className='flex flex-wrap gap-2'>
                        <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/146/146018.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='img' />
                            <p className='text-lg font-semibold'>Elon Musk</p>
                        </div>
                        <img className='w-4 h-4' src={`https://cdn-icons-png.freepik.com/256/17/17764.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='...' />
                    </div>

                      <li className="bg-white text-black p-1 list-none flex-grow border border-gray-400 rounded-xl">
                        {item}
                      </li>
                      <button
                        className="text-white rounded-md px-2 py-1 ml-2"
                        onClick={() => handleDelete(index)}
                      >
                        <img className='rounded-md w-4 h-4' src={`https://cdn-icons-png.freepik.com/256/3917/3917759.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='del'/>
                      </button>
                    </div>
                    </div>))}
                
            </div>
          </div>

    {/* watch post */}

        <div className='flex flex-col p-2'>

            <div className='flex flex-wrap justify-between'>
                <div className='flex flex-wrap gap-2'>
                    <img className='w-7 h-7' src={`https://cdn-icons-png.freepik.com/256/146/146018.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='img' />
                    <p className='text-lg font-semibold'>Elon Musk</p>
                </div>
                <img className='w-4 h-4' src={`https://cdn-icons-png.freepik.com/256/17/17764.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='...' />
            </div>


{/* middle post page */}

            <div className='p-4'>
                <img className='w-full h-full rounded-lg' src={`https://tse2.mm.bing.net/th?id=OIP.tLotgCDtzgTdwJcTiXWRCwHaEK&pid=Api&P=0&h=180`} alt='img'/>
            </div>


  {/* like-bottom div */}     

            <div className='p-2 px-6 flex flex-wrap justify-between'>
                <div className='flex flex-wrap gap-1'>
                    <img onClick={() =>{ setLike(like+1)}} className='w-4 h-4 cursor-pointer active:bg-red-500' src={`https://cdn-icons-png.freepik.com/256/115/115564.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='like'/>
                    <p>{like}</p>
                </div>
                <div className='flex flex-wrap gap-1'>
                    <img className='w-4 h-4' src={`https://cdn-icons-png.freepik.com/256/273/273826.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='cmt'/>
                    <p>1</p>
                </div>
                <div className='flex flex-wrap gap-1'>
                    <img className='w-4 h-4' src={`https://cdn-icons-png.freepik.com/256/157/157960.png?ga=GA1.1.1828148425.1706526853&semt=ais_hybrid`} alt='share'/>
                    <p>1</p>
                </div>


            </div>
        </div>


    </div>
  )
}

export default Home