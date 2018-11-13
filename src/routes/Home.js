import React from 'react';
import {Link} from 'react-router-dom';
const Home = (props) => {
    return (
        <div className="home_area d-flex align-items-center">
            <div className="container">
                <div className="row d-flex align-content-center">
                    <div className="col-md-12">
                        <p className="about">
                            Hello, there. I'm Shahadat Hossain Biplob. I'm a front-end guy fueled by caffeine and tea. I do
                            front-end stuff like JavaScript HTML, CSS, SASS, for the living. I like JS and things and tools
                            associated with it, like React, Webpack, NPM, Node etc. Here is some of the <Link to='/work'>works</Link> I have done. You can
                            find me on <a href="https://github.com/shahadathb" target="_blank">github</a> ,
                            <a href="https://stackoverflow.com/users/4603860/shahadat-hossain" target="_blank">stackoverflow</a>
                             and <a href="https://www.facebook.com/shahadat.h.biplob" target="_blank">facebook</a> .
                            Thank you 😊 and peace ✌️
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;