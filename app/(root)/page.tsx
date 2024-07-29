import Image from 'next/image'
import React from 'react'

const Home = () => {

  const services = [
    'Job Placement: We match qualified drivers with job openings that fit their skills, experience, and career goals.',
    'Temporary Staffing: Need flexibility? We offer a range of temporary and temp-to-perm positions to suit your lifestyle.',
    'Permanent Staffing: Looking for stability? Our permanent placement services connect you with long-term driving roles in leading companies.',
    'Training & Certification: Stay ahead of the curve with our comprehensive training programs designed to keep your skills sharp and certifications up-to-date.',
  ]

  return (
    <>
      <section className='home'>
          <h1 className='home-heading'>Recruitment solutions to suit your needs</h1>
      </section>
      <section className='mt-5 flex items-center gap-4 flex-col sm:flex-row'>
        <Image 
        src='/assets/images/for-hire.jpeg'  
        height={400}
        width={400}
        alt='for-hire'
        className='rounded-2xl'
        />
        <h2 className=' text-white font-semibold rounded-2xl p-6 bg-gray-500 flex-center flex-col h-64 gap-4'>We match qualified candidates with highly competitive paying roles</h2>
      </section>
      <section className='flex-center hidden h-72 flex-col gap-4 mt-5 rounded-2xl bg-gray-500'>
      <h1 className='h1-semibold max-w-[500px] flex-wrap text-centershadow-sm text-white text-center'>Recruitment solutions to suit your needs</h1>
      <p className='text-center text-white'>We match candidates with high end roles such as luxury delivery driver, private chauffeurs and luxury property managers</p>
      </section>
      <section className='flex flex-col sm:flex-row h-72 gap-4 mt-5 rounded-2xl items-center p-4 justify-center'>
      <Image 
        src='/assets/images/job-phone.jpeg'  
        height={400}
        width={400}
        alt='for-hire'
        className='rounded-2xl'
        />
      </section>
      <section className='flex-center hidden flex-col gap-4 mt-5 rounded-2xl bg-gray-500 p-6'>
      <p className='text-center text-white p-16-regular'>We understand that finding the perfect driving job can be a journey in itself. That’s why we’re dedicated to connecting skilled drivers with top employers across the country. Whether you’re looking for full-time, part-time, or temporary driving positions, we have the right job for you.</p>
      <p className='p-20-semibold text-white'>Some of our services</p>
      <ul>
          {services.map((service)=>(
            <li key={service} className='text-white p-16-semibold'>- {service}</li>
          ))}
      </ul>
      </section>
      <section className='flex-center hidden flex-col gap-2 mt-5 rounded-2xl bg-gray-500 p-6'>
          <h1 className='p-20-semibold text-white'>Contact Us</h1>
          <p className='text-white'>Company No. 12345678</p>
          <p className='text-white'>21 bridge Street</p>
          <p className='text-white'>London</p>
          <p className='text-white'>SE1 2EE</p>
          <p className='text-white'>Phone Number</p>
      </section>
    </>
  )
}

export default Home