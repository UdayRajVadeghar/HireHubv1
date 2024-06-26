// components/InfoBand.js


const InfoBand = () => {
  return (
    <div>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-8 lg:p-10 mx-4 sm:mx-8 lg:mx-10 place-items-center'>
          <div className='border-2 p-4 m-2 w-full sm:w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src="https://utfs.io/f/c7242306-f3d2-457a-85ff-6e612a78b3cc-lld9m9.webp" alt="Our Team" className='w-full rounded-xl' /><br />
              <button className='border-2 rounded-full p-2 border-red-400 text-red-400'>Company</button>
              <p className='p-2 font-bold text-lg'>Become a Part of Our Journey</p>
              <p className='p-2 text-md'>Join us at HireHub to be a part of an innovative team dedicated to revolutionizing the job market through technology and collaboration.</p>
              <br />
              <div className='flex items-center'>
                <img src="https://utfs.io/f/872939fb-ac99-48e8-b65c-145651a9d99a-2k9xef.png" className='w-10 h-10 rounded-full' alt="Rajesh Kumar" />
                <p className='pl-2'><span className='font-bold'>Raj</span><br />April 5, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-full sm:w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src="https://utfs.io/f/85390df6-e4c6-4677-9ba4-b383ffd9ef30-whjnp4.webp" alt="Growth Strategies" className='w-full rounded-xl' /><br />
              <button className='border-2 rounded-full p-2 text-green-400 border-green-400'>Innovation</button>
              <p className='p-2 font-bold text-lg'>Driving Innovation Forward</p>
              <p className='p-2 text-md'>Learn how HireHub is at the forefront of innovation, using advanced technologies to transform the hiring process.</p>
              <br />
              <div className='flex items-center'>
                <img src="https://utfs.io/f/c7cacab4-8370-4870-9e77-a8af50dfd2a7-20hvfl.png" className='w-10 h-10 rounded-full' alt="Anil Singh" />
                <p className='pl-2'><span className='font-bold'>Harsh Singh</span><br />March 15, 2024</p>
              </div>
            </div>
          </div>
          <div className='border-2 p-4 m-2 w-full sm:w-7/8 rounded-2xl shadow-sm'>
            <div>
              <img src="https://utfs.io/f/3f3cf970-5759-4a50-acd2-0cd134a18e9e-wxi7kd.webp" alt="Community Engagement" className='w-full rounded-xl' /><br />
              <button className='border-2 rounded-full p-2 text-yellow-400 border-yellow-400'>Community</button>
              <p className='p-2 font-bold text-lg'>Engage with Our Community</p>
              <p className='p-2 text-md'>Join our community events and forums to exchange ideas, seek advice, and connect with other professionals in the industry.</p>
              <br />
              <div className='flex items-center'>
                <img src="https://utfs.io/f/e331b176-3f28-4068-be09-18cd45bf13e9-1l4ya1.png" className='w-10 h-10 rounded-full' alt="Priya Sharma" />
                <p className='pl-2'><span className='font-bold'>Priya Sharma</span><br />March 22, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:flex md:flex justify-around items-center mt-12 p-12 pt-20 pb-20 bg-black rounded-lg'>
        <div className='sm:pb-10'>
          <p className='text-3xl text-white font-bold font-serif'>Ready to make a change?</p><br />
          <button className='text-white rounded-full p-3 bg-blue-500 text-xs'>SIGN UP NOW</button>
          <button className='text-white ml-4 border-b-2 border-red-500 text-xs'>CONTACT SALES</button>
        </div>
        <div className='pt-4 xs:mt-10 sm:mt-10 border-2 shadow-3xl border-white rounded-xl p-5'>
          <div className='text-white'>
            <p>"HireHub is a game-changer at any scale."</p><br />
            <div className='flex'>
              <img src="https://utfs.io/f/872939fb-ac99-48e8-b65c-145651a9d99a-2k9xef.png" className='w-10 h-10 rounded-full' alt="David Smith" />
              <p className='pt-2 pl-4'>David Smith</p>
            </div>
            <div className='pt-2'>
              <button className='border-b-2 border-red-500'>
                Read Success Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBand;
