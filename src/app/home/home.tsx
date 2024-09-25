import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
    return (
      <div>
        <div className='home'>
          <div className='hero-sec'>
            <h1 className='hero-heading'>Start Your Web Development Journey</h1>
            <p className='hero-text'>Developers is an online learning platform that offers various web development courses for your skill development.</p>
          <Link href={"/apply"}> <button className='button'>Apply Now</button></Link>
          </div>
         <div className='hero-img'>
            <Image src={"/hero-img3.png"} alt='hero-img' width={450} height={400} />
          </div>
          
        </div>
          
        </div>
  )
}

export default Home
