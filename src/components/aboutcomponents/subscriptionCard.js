"use client";

import { useState } from "react";

const SubscriptionCard = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);

  const handleClick = (event) => {
    if (email.includes("@")) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <div className='p-12 m-10 bg-black lg:flex justify-around rounded-xl'>
        <div>
          <p className='text-white pt-5 text-3xl'>
            Subscribe to our monthly Newsletter
          </p>
        </div>

        <div className='pt-4'>
          <input
            type='text'
            placeholder='Enter your Email'
            className='font-serif rounded-xl p-4'
            value={email}
            onChange={handleChange}
          />
          <button
            className='bg-white p-4 m-1 rounded-xl font-light'
            onClick={handleClick}
          >
            Subscribe
          </button>
          {!valid && (
            <div className="text-white">
              Please enter a Valid Email.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
