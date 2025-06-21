import React from "react";

const SkillProgress = ({ skill, percentage }) => {
  return (
    <div className="w-full" aria-label={`${skill} skill progress`}>
      <h1 className="font-bold text-sm sm:text-base my-1">{skill}</h1>
      <div className="bg-purple-300 h-3 rounded-2xl w-full">
        <div
          className="bg-green-600 h-full text-xs flex justify-center items-center text-white font-bold transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  const skills = [
    { skill: "HTML", percentage: 90 },
    { skill: "React", percentage: 80 },
    { skill: "JS", percentage: 85 },
    { skill: "CSS", percentage: 75 },
  ];

  return (
    <section
      className="text-white flex flex-col items-center text-center bg-[#2d2e2d] py-6 px-4 h-auto"
      id="about"
    >
      <h1 className="text-[#c4fcc4] font-bold text-3xl sm:text-4xl md:text-5xl border-hidden rounded-2xl px-2 py-2">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-[1200px] mt-4 md:space-x-6">
        <img
          className="rounded-3xl w-full max-w-[250px] md:max-w-[200px] lg:max-w-[250px]"
          src="/About.jpg"
          alt="About Me"
          title="About Me"
        />

        <div className="flex-1 mt-4 md:mt-0">
          <p className="border-hidden rounded-xl mx-auto w-full font-bold text-sm sm:text-base md:text-lg leading-relaxed text-left">
            I am a full-stack developer proficient in both frontend and backend
            development. I am deeply passionate about coding and strive to
            create applications that can reach and benefit a broad audience. My
            goal is to continuously enhance my skills to transform innovative
            ideas into reality. I am eager to explore emerging technologies and
            leverage them to expand my expertise.
          </p>

          <div className="w-full mt-8">
            <ul className="mt-4 space-y-3 w-full">
              {skills.map((skill, index) => (
                <li key={index}>
                  <SkillProgress
                    skill={skill.skill}
                    percentage={skill.percentage}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
