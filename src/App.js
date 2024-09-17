import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Dynamic Flow</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome to Dynamic Flow</div>
        <div className="intro-heading ">Experience seamless Animation and Elegance in Web Design</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Get Started</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">We Provide the Following Services</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">E-Commerce</h4>
          <p className="text-muted">We build powerful, user-friendly e-commerce platforms that drive sales and enhance the shopping experience. From product pages to payment gateways, we've got you covered.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Responsive Design</h4>
          <p className="text-muted">We create responsive websites that look great on any device. Whether it’s a desktop, tablet, or smartphone, your site will provide an optimal viewing experience.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Custom Web Development</h4>
          <p className="text-muted">We design and develop custom websites tailored to your brand's unique identity. From concept to launch, every detail is crafted to ensure a seamless user experience</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
       
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="ai-image.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Areesha Kainat</h4>
                  <h5>Mar 2024 - Present</h5>
                  <h3 className="subheading">Senior Student at GIAIC</h3>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">As a senior student in the Governor House initiative focused on GenAI, Web3.0, and the Metaverse, I play a pivotal role in guiding and supporting my peers with expert advice and troubleshooting assistance. By fostering a collaborative and supportive learning environment, I empower others to excel while simultaneously enhancing my leadership skills and deepening my understanding of these cutting-edge technologies. This experience not only sharpens my technical expertise but also reinforces my commitment to driving innovation in these exciting new fields.</p>
                </div>
                
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Fazila Taqveem</h4>
                  <h5>Mar 2024 - Present</h5>
                  <h3 className="subheading">Senior Student at GIAIC</h3>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">As a senior participant in the Governor House initiative focused on GenAI, Web3.0, and the Metaverse, I actively guide and support my peers by offering expert advice and troubleshooting assistance. I foster a collaborative learning environment where everyone can excel. This role not only enhances my leadership skills but also deepens my understanding of these cutting-edge technologies.</p>
                </div>
                
              </div>
            </li>
            
           
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
         
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
      <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li> <br />
            
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
           
          </ul>
        </div>
        
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
          <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
