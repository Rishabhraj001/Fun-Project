import "./Skills.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const skillData = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Java", level: 90 },
            { name: "C++", level: 85 },
            { name: "Python", level: 75 },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "HTML", level: 95 },
            { name: "CSS", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 85 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Spring Boot", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "REST APIs", level: 90 },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", level: 85 },
            { name: "MySQL", level: 80 },
            { name: "Firebase", level: 70 },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git & GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Postman", level: 85 },
        ],
    },
    {
        title: "Computer Science",
        skills: [
            { name: "Data Structures", level: 90 },
            { name: "Algorithms", level: 85 },
            { name: "OOP", level: 90 },
        ],
    },
];


const Skills = () => {

    const sectionRef = useRef(null);


    useEffect(() => {

        const ctx = gsap.context(() => {


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });



            tl.from(".skill-tag", {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })


            .from(".skills-title", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4")


            .from(".skills-subtitle", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4")


            .from(".skill-card", {
                y: 80,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.3")


            .from(".progress-bar", {
                width: 0,
                duration: 1,
                stagger: 0.08,
                ease: "power2.out"
            }, "-=0.4");


            ScrollTrigger.refresh();


        }, sectionRef);



        return () => ctx.revert();


    }, []);



    return (

        <section 
            className="skills" 
            id="skills" 
            ref={sectionRef}
        >


            <span className="skill-tag">
                Technical Skills
            </span>



            <h2 className="skills-title">
                MY SKILLSET
            </h2>



            <p className="skills-subtitle">
                A comprehensive overview of my programming languages,
                frameworks, databases and engineering concepts.
            </p>




            <div className="skills-container">


                {
                    skillData.map((category,index)=>(

                        <div 
                            className="skill-card" 
                            key={index}
                        >


                            <h3>
                                {category.title}
                            </h3>



                            {
                                category.skills.map((skill,i)=>(

                                    <div 
                                        className="skill" 
                                        key={i}
                                    >


                                        <div className="skill-info">

                                            <span>
                                                {skill.name}
                                            </span>

                                            <span>
                                                {skill.level}%
                                            </span>

                                        </div>




                                        <div className="progress">

                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width:`${skill.level}%`
                                                }}
                                            >

                                            </div>

                                        </div>



                                    </div>

                                ))
                            }



                        </div>

                    ))
                }


            </div>


        </section>

    );

};


export default Skills;