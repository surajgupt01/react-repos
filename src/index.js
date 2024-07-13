import images1 from './assets/projects/project-1.jpg'
import images2 from './assets/projects/project-2.jpg'
import images3 from './assets/projects/project-3.jpg'



const Hero_Content = "Welcome to my portfolio! I'm Suraj Gupta, a 3rd year Computer Science and Engineering student with a strong passion for technology and innovation. My expertise lies in machine learning and full stack development, particularly within the MERN stack. As I aim for roles in full stack development and software engineering, this portfolio showcases my projects, skills, and achievements. Explore my work and see how I combine creativity and technical proficiency to build impactful solutions."


 const Proj = [
    {title:"File Sharing Website",
     image: images1,
     discription:"Implemented a full stack website backendallows users to share file of size upto 5gb for a faste upload and download implemented it with AWS s3 solution",
     technologiesUsed: ['HTML' , "CSS" ,"JS" , "Node js" , "AWS-S3" , "Mongodb"],

    },

    {title:"Recomedation System",
        image: images2,
        discription:"Implented a recommendation sytem for recommending similar type of restaurants in a given are to judge the competiton and plan your business strategy accoding to it",
        technologiesUsed: ['Python' , "Numpy" ,"Pandas" , "Scikit-library"],
   
       },

       {title:"Multiplayer real-time Tic-Tac-Toe",
        image: images3,
        discription:"Build a real-time tic-tac-toe board game which allows user to play it with their friends",
        technologiesUsed: ['React-js' , "Node-js" ,"MongoDb" , "Socket.io" , "Express-js"],
   
       },   

]
export { Proj , Hero_Content}