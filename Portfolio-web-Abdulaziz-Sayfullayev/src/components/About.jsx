import React from "react";
import SkillCard from "../layouts/SkillCard";

const About = () => {
  const skill1 = "w-100/100";
  // const skill2 = "w-5/5";
  const skill3 = "w-1/3";

  return (
    <div className=" min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-4xl font-semibold text-center lg:mt-2">
          About Me
        </h1>
      </div>

      <div className=" -mt-10">
        <div className=" mb-10">
          <h2 className=" text-3xl font-semibold">I'm Abdulaziz Sayfullayev</h2>
          <p className=" mt-4 lg:mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit officia quod sint consequuntur cupiditate sed iste
            impedit asperiores quibusdam soluta.
          </p>
        </div>

        <div>
          <h2 className=" text-3xl font-semibold ">My Skills</h2>

          <div>
            <SkillCard title="Html" width={skill1} val="100%" />
            <SkillCard title="CSS" width={skill1} val="100%" />
            <SkillCard title="JavaScript" width={skill1} val="100%" />
            <SkillCard title="ReactJS" width={skill1} val="100%" />
            <SkillCard title="React_Native" width={skill3} val="40%" />
            <SkillCard title="React_Bootstrapt" width={skill1} val="100%" />
            <SkillCard title="Styled-Components" width={skill1} val="100%" />
            <SkillCard title="And-Desing" width={skill1} val="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
