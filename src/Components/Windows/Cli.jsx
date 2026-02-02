import React from 'react'
import MainWindow from './MainWindow'
import Terminal from 'react-console-emulator'
import './Cli.scss'

const Cli = () => {
  const commands = {
    about: {
      description: 'About me',
      fn: () => `
Hi! I'm Soumish Jain, a passionate full-stack developer and creative technologist.
I love building interactive web experiences and exploring innovative solutions.
Currently focused on React, Node.js, and modern web development.
`
    },
    skills: {
      description: 'View technical skills',
      fn: () => `
Frontend:  React.js, JavaScript, HTML5, CSS3, SCSS, Vite, Tailwind CSS
Backend:   Node.js, Express, MongoDB, Firebase
Tools:     Git, GitHub, VS Code, Figma, AWS
Languages: JavaScript, HTML, CSS, Python, Java
Other:     REST APIs, Responsive Design, UI/UX
`
    },
    projects: {
      description: 'List projects',
      fn: () => `
📁 Portfolio Website
   A modern macOS-themed portfolio showcasing my work and skills.
   
📁 GitHub Projects
   Collection of open-source projects and contributions.
   
📁 Full Stack Application
   Building scalable web applications with React & Node.js.

Type 'github' to explore my GitHub projects!
`
    },
    experience: {
      description: 'Work experience',
      fn: () => `
💼 Full Stack Developer (Present)
   Working on modern web applications and technologies
   
💼 Web Developer Intern
   Built responsive websites and learned industry best practices
`
    },
    contact: {
      description: 'Contact information',
      fn: () => `
📧 Email:  your-email@example.com
💬 Discord: YourUsername#1234
📱 Phone:  +1 (XXX) XXX-XXXX
🌐 Website: yourportfolio.com
`
    },
    social: {
      description: 'Social profiles',
      fn: () => `
🐙 GitHub:    github.com/yourprofile
🔗 LinkedIn:  linkedin.com/in/yourprofile
🐦 Twitter:   twitter.com/yourprofile
💼 Portfolio: yourportfolio.com
`
    },
    resume: {
      description: 'Download resume',
      fn: () => `📄 Resume downloaded! Opening resume.pdf...`
    },
    whoami: {
      description: 'Show current user',
      fn: () => 'soumishjain'
    },
    date: {
      description: 'Show current date',
      fn: () => new Date().toString()
    },
  };

  return (
    <MainWindow>
        <div className='cli-window'>
            <Terminal 
            commands={commands}
            welcomeMessage={`
                                                                   
   Welcome to my Portfolio Terminal! 🚀                           
                                                                   
   I'm Soumish Jain - Full Stack Developer & Creative Technologist
                                                                
   Type 'help' to see all available commands                       

`}
            prompt={'soumishjain:~$'}
            promptLabelStyle={{color: '#00ff00'}}
            />
        </div>
    </MainWindow>
  )
}



export default Cli
