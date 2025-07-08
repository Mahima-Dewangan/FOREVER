import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
            <Title text1={'ABOUT'} text2={'US'}>

            </Title>
      </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
             <img  className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                 <div className='flex flex-col justify-center  gap-6 md:w-2/4  text-gray-600'>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem sint non ducimus voluptatem adipisci aliquid neque alias accusamus consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure rerum nesciunt nulla?</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta explicabo dolores doloremque! Veritatis, optio molestias in dolorum inventore quasi suscipit distinctio mollitia commodi aliquam, reiciendis nulla. Nostrum natus veritatis aut, asperiores iste suscipit quaerat aliquam quos magni, voluptas nobis.</p>
                 </div>
        </div>

        <div className='text-4xl py-4  '>
          <Title text1={'WHY'} text2={'CHOOSE US'}></Title>

        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10  md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis quod, modi consectetur voluptate accusamus. Sunt, modi? Vel corporis maiores magnam, numquam eligendi recusandae eaque illo rerum a aut quidem?</p>
          </div>
          <div className='border px-10  md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis quod, modi consectetur voluptate accusamus. Sunt, modi? Vel corporis maiores magnam, numquam eligendi recusandae eaque illo rerum a aut quidem?</p>
          </div>
          <div className='border px-10  md:px-16 py-8 sm:py-20  flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis quod, modi consectetur voluptate accusamus. Sunt, modi? Vel corporis maiores magnam, numquam eligendi recusandae eaque illo rerum a aut quidem?</p>
          </div>


        </div>

        <NewsletterBox/>
      
    </div>
    
  )
}

export default About
