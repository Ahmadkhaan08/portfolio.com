import React from 'react'
import Title from '../Layout/Title'
import { projectOne, projectTwo, projectThree } from "../../assests/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href='http://ak-movieverse.netlify.app/'
        target='_blank'>
        <ProjectsCard
          title="Movie Search App"
          des=" A Well Design Movie Search App where you can search any kind of  movie according to your taste and preference.You can search old and latest movies any time you want."
          src={projectOne}
        /></a>
        <a href='https://thinktankquiz.netlify.app/'
        target='_blank'>
        <ProjectsCard
          title="Quiz App"
          des="You can test your IQ level in our QUIZ APP free of cost.You can test yourself anywhere and any time you want.Be Prepare your self with our App."
          src={projectTwo}
        /></a>
        <a href='https://ahmadkhanamazon.netlify.app/'
        target='_blank'>
        <ProjectsCard
          title="Amazon Clone"
          des="An amazon clone you can enjoy all the facilities here exact the real amazon app."
          src={projectThree}
        /></a>
        <a href='http://rareridesautos.netlify.app/'
        target='_blank'>
        <ProjectsCard
          title="RRA Cars Website"
          des="Cars website,You can book your new car from our company with easy installments and we can also provide free insurance.Lets start a new journey with RRA Cars."
          src={projectThree}
        /></a>
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Weather App"
          des="Let's be updated with weather information and keep in touch what's going on in your area or city."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects