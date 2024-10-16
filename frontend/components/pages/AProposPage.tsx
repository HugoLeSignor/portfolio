import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';

const skills = [
  { icon: <FaReact className="text-4xl text-blue-500" />, name: ""},
  { icon: <SiNextdotjs className="text-4xl text-black" />, name: "" },
  { icon: <SiJavascript className="text-4xl text-yellow-400" />,name: "" },
  { icon: <SiTypescript className="text-4xl text-blue-600" />, name: "" },
  { icon: <SiTailwindcss className="text-4xl text-teal-500" />, name: "" },
  { icon: <FaSass className="text-4xl text-pink-500" />, name: "" },
  { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "" },
  { icon: <SiMongodb className="text-4xl text-green-500" />, name: "" },
];

const AProposPage: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -100 * skills.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: skills.length * 2,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="h-full overflow-y-auto pb-24 scrollable-content">
      <div className="max-w-2xl mx-auto p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">À Propos de Moi</h1>
        
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <div className="w-32 h-32 sm:w-48 sm:h-48 relative mb-4 sm:mb-0 sm:mr-8 flex-shrink-0">
            <Image
              src="https://raw.githubusercontent.com/HugoLeSignor/OC-Portfolio/refs/heads/gh-pages/moi.jpg"
              alt="Hugo Le Signor"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start w-full">
            <h2 className="text-2xl font-semibold mb-4">Mes Compétences</h2>
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex"
                animate={controls}
                style={{ width: `${skills.length * 30}%` }}
              >
                {[...skills, ...skills].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center justify-center" style={{ width: `${100 / (skills.length * 2)}%` }}>
                    {skill.icon}
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mon Parcours</h2>
          <p className="mb-4 text-justify">
            Passionné par la technologie depuis mon plus jeune âge, j&apos;ai suivi une formation en informatique à OpenClassrooms.
            Pendant l&apos;obtention de mon diplôme, j&apos;ai travaillé sur divers projets qui m&apos;ont permis d&apos;affiner mes compétences en développement web.
            Mon expérience couvre à la fois le développement frontend et backend, me permettant de créer des applications web complètes et performantes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AProposPage;