import React from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';


import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-3">
          I´m a Graphic Designer graduated by the University Impacta de Tecnologia in 2018, my experiences as designer are with a freelancer and in my last job I was responsable for update the website and social midias of the company.</p>
          <p className="lead mb-3">
While I was studying at the university, I´ve had contact with some people who were working as a web developer or studyng it. At this time I had a big interest to know how the things in this area works, what the professional do, study and etc. Due a lot of works in the university and my totaly focus in graphic design I put my interest in codes on ice.</p>
<p className="lead mb-3">
With the pandemic I´ve had a lot of time to study and updated my skills. In october 2020 I participated of the #NLW3 - Next level Week 3 of Rocketseat, that in addition to teach people who dont´t know anything about codes, they gave a lot of tips for new and experient students. I finished the project and watched lives with the web developer professionals. During that week I noticed that this is what I want.</p>
<p className="lead mb-3">
I´m currently studying HTML, CSS, JavaScript at Rocketseat.</p>
          
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="graduation"
      >
        <div className="w-100">
          <h2 className="mb-5">Graduation</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Faculdade Impacta de Tecnologia</h3>
              <div className="subheading mb-3">Graphic Design</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016 until 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools (from 0 to 100%)
          </div>

          <BubbleChart
          graph= {{
            zoom: 0.8,
            offsetX: -0.03,
            offsetY: -0.01,
          }}
          width={800}
          height={800}
          padding={10} // optional value, number that set the padding between bubbles
          showLegend={true} // optional value, pass false to disable the legend.
          legendFont={{
            family: 'Open Sans', 
            size: 16,
            color: '#000',
            weight: 'Regular 400',
          }}
      valueFont={{
            family: 'Open Sans',
            size: 16,
            color: '#fff',
            weight: 'light 300',
          }}
      labelFont={{
            family: 'Open Sans',
            size: 16,
            color: '#fff',
            weight: 'light 300',
          }}
          data={[
            { label: 'HTML5', value: 60, color: '#17a2b8' },
            { label: 'CSS3', value: 50, color: '#6f42c1' },
            { label: 'WordPress', value: 50, color: '#e83e8c' },
            { label: 'React', value: 20, color: '#20c997' },
            { label: 'Javascript', value: 20, color: '#bd5d38' },
            { label: 'Node Js', value: 20, color: '#dc3545' },
 
          ]}

          />

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Administrative Assistent</h3>
              <div className="subheading mb-3">Dynamic Person</div>
              <p>
              Responsable for update the website and social midias of the company.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2017 until July 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            I´m studyng to be a web developer. In my free time I like to play sports as football, voleyball or even video games.
            I´m getting the habbit to read every day because when I was younger I didn´t read any book. now I´m getting the taste for reading.
          </p>
          <p className="mb-0">
          I spend a large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Google - Fundamentals of digital marketing - 2020
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Fundação Getulo Vargas - Fundamentals of services marketing - 2020
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Faculdade Impacta de Tecnologia - Graduate in Graphic Design - 2016/2018
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Impacta Tecnologia - After Effects CC - Creating animations and dynamic effects - 2017
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Impacta Tecnologia - Brand Storytelling - 2017
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Impacta Tecnologia - Ecommerce Photography - 2017
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              ILSC Education Group (Sidney/Australia) - Exchange English Course 2015/2016
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Saga - Photoshop CS5 - Digital illustration and image treatment- 2012
            </li>
            <li>
              <i className="fa-li fa fa-check text-warning"></i>
              Senac Brasil - Photoshop and Illustrator CS5 - Digital illustration and image treatment - 2011
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
