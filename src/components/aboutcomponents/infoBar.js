import React from 'react'


const InfoBand = () => {
  return (
    <div className='lg:flex md:flex justify-around items-center mt-12 p-12 pt-20 pb-20 bg-black'>
      <div className='sm:pb-10'>
        <p className='text-3xl text-white font-bold font-serif'>Ready to get started?</p><br></br>
        <button className='text-white rounded-full p-3 bg-blue-500 text-xs'>SIGN UP FOR FREE</button>
        <button className='text-white ml-4 border-b-2 border-red-500 text-xs'>TALK TO SALES</button>

      </div>
      <div className='pt-4 xs:mt-10 sm:mt-10 border-2 shadow-3xl border-white rounded-xl p-5'>
        <div className='text-white'>
          <p>"At any level of scale, RevenueCat just works"</p><br></br>
          <div className='flex'>
            <img src="https://utfs.io/f/e2cbf413-7c87-4ff9-b14f-682a45f066be-edwipf.png" className='w-10 h-10'></img>
            <p className='pt-2 pl-4'>David Smith</p>
          </div>
          <div className='pt-2'>
            <button className='border-b-2 border-red-500'>
              Read Case Study
            </button>
            
          </div>
          
          
        </div>
      </div>
      
    </div>
  )
}

export default InfoBand