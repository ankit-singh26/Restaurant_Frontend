import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sunt ullam quas doloremque maiores repellendus aliquam facilis inventore sapiente nemo in saepe consequatur, sit et fugiat nihil deserunt autem. Alias, eos iusto cum quaerat, possimus doloribus, perspiciatis inventore quae dolor fuga aut enim quidem? Saepe nostrum deleniti ratione ipsa quae?</p>
            <Link to={"/"}>Explore Menu <span>
               <HiOutlineArrowNarrowRight/> 
               </span>
               </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
