import React from 'react';
import './home-page.scss';
import '../../assets/myAvatar.svg';
import { SocialIcon } from 'react-social-icons';

const HomePage = () => {
  return (
    <div id="homePage">
      <section id="welcome">
        <div className="profile-container center-block">
          <section className="image-container col-sm-8 col-lg-4">
            <img src="assets/myAvatar.svg"  className="avatar rounded-circle col-sm-8 col-lg-4" alt="Justin Conner Portait" />
          </section>
          <section className="text-container col-md-10">
            <h3 className="job-title">Full Stack Web Developer</h3>
            <p>Devout seeker of simplicity, clarity and purity in work, code and life itself.</p>
          </section>
          <section className="badge-container col-md-8">
            <span className="badge badge-primary">AngularJS</span>
            <span className="badge badge-primary">ReactJS</span>
            <span className="badge badge-primary">HTML5</span>
            <span className="badge badge-primary">CSS3/SASS</span>
            <span className="badge badge-primary">NodeJS</span>
            <span className="badge badge-primary">ExpressJS</span>
            <span className="badge badge-primary">SocketIO</span>
            <span className="badge badge-primary">Mocha</span>
            <span className="badge badge-primary">Karma</span>
            <span className="badge badge-primary">Protractor</span>
            <span className="badge badge-primary">Git</span>
            <span className="badge badge-primary">NPM</span>
          </section>
          <section className="professional-links-container col-md-10">
            <SocialIcon url="https://github.com/jdconner" />
            <SocialIcon url="http://linkedin.com/in/justindconner" />
            <SocialIcon network="email" color="#156dbb" url="mailto:justindconner2@gmail.com" />
          </section>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
