import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p >Nice to meet you. This is a little bit about me.</p>
          </div>
          <div>
            <p>I create websites and web applications using a combination of tools such as HTML, CSS, JavaScript, React, Next.js, Gatsby.js, Node.js, MongoDB and Express.js.</p>
            <p >
            I’m focused on anything that sparks my curiosity. Other things I do besides coding include playing the guitar, making generative art and thinking about the beautiful wonders of life every once in a while.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
