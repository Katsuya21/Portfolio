/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Hex from '../../assets/recentprojects/Hex.png';
import Notes from '../../assets/recentprojects/Notes.png';
import Ecom from '../../assets/recentprojects/ECom.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'ECom Website', 
      description: `A website project for the Frontend of an Ecommerce Website
      built using HTML,CSS and JavaScript`,
      alter: 'Startup Project',
      image: `${Ecom}`,
      
    },
    { 
      id: 3,
      title: 'Hex_Color Generator', 
      description: `Genrate beautiful color gradients with just a click!`,
      alter: 'Hex_Color',
      image: `${Hex}`,
    },
    { 
      id: 4,
      title: 'Notes App', 
      description: `A simple notes app to help you organize and never miss a thing!`,
      alter: 'Notes',
      image: `${Notes}`,
    },
    
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
