import React from 'react'

const Skills = () => {
  return (
    <div id='skills'  className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="flip-right">
<h2 className='text-4xl md:text-5xl'> Technologies I work with</h2>
<p className='text-gray-500 pt-2'>
I am learning web development. I am passionate about coding, AI, web development and always looking to learn new things. I’ve worked on projects like count down times , ATM machine etc , and I’m excited to grow in the tech field.
</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>

            <div className='space-y-2'>
              <h2 data-aos="flip-right">Typescript</h2>
              <h2 data-aos="flip-right">React.js</h2>
              <h2 data-aos="flip-right">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="flip-right">Tailwind</h2>
              <h2 data-aos="flip-right">CSS</h2>
              <h2 data-aos="flip-right">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
  
    
    </div>
  )
}

export default Skills
