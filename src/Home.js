import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, Card, Col, Divider, Image, Row } from 'antd';
import Styles from './Home.module.scss';
import Navbar from './components/Navbar';
import SectionImageText from './components/SectionImageText';
import SectionTextCards from './components/SectionTextCards';
import SquadCard from './components/SquadCard';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Footer from './components/Footer';

export default function Home() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleRegisterClick = () => {
    navigate('/register');
  };

  // Map configuration
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734 // Replace these with your coordinates
  }

  // Animation for the hero section
  const heroAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Animation for the "How we can help" section
  const howWeCanHelpAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  // Animation for the "Our Highlighted Features" section
  const featuresAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  // Animation for the "Algorithms Applied" section
  const algorithmsAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  // Animation for the "The Squad" section
  const squadAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className={Styles.homePage}>
      <Col className={Styles.hero}>
        <Navbar />
        <Col className={Styles.heroCol}>
          <animated.p style={heroAnimation}>
            Your assets in confidence,
            <br />
            Invest with evidence.
          </animated.p>
          <Col className={Styles.heroBtnGroup}>
            <Button className={Styles.heroBtn} type="primary" onClick={handleLoginClick}>
              Login
            </Button>
            <Button className={Styles.heroBtn} type="default" onClick={handleRegisterClick}>
              Register
            </Button>
          </Col>
        </Col>
      </Col>
      <SectionImageText
        imageUrl="/your-image-url.png"
        aboutText="About Us"
        heading="How we can help"
        paragraph="Our investment recommendation system uses historical data and machine learning algorithms to generate personalized investment recommendations. It aims to help individuals make more informed investment decisions that align with their goals and risk profile, potentially leading to better investment returns and financial stability. The user-friendly web portal makes the investment process more accessible and engaging for individuals, providing them with the tools and resources they need to achieve their financial goals."
        animation={howWeCanHelpAnimation}
        />
        <SectionTextCards
        
          aboutText="Our Approach"
          heading="Innovative Strategies"
          paragraph="Innovative Strategies
          We use a combination of data-driven insights and industry expertise to deliver innovative investment strategies that help our clients achieve their financial goals. Investique is a leading platform for novice and experienced investors alike. We provide our users with up-to-date market insights, personalized investment recommendations, and a user-friendly interface to manage their investments. Our mission is to democratize investing by making it accessible to everyone, regardless of their financial background. We believe that everyone should have the tools to make informed investment decisions, and we're dedicated to providing these tools in an understandable and user-friendly format. We're constantly improving and expanding our offerings based on our users' feedback and the changing market landscape. We're excited to have you on this journey with us.."
          
          cardData={[
            { title: 'Strategy 1', content: 'Clear Objectives and Detailed Planning' },
            { title: 'Strategy 2', content: 'Effective Resource Allocation and Progress Monitoring' },
            { title: 'Strategy 3', content: 'Strong Communication and Risk Management' },
          ]}
          animation={featuresAnimation}
        />
        <Col className={Styles.heading}>
          <h2>Our Highlighted Features</h2>
          <Divider className={Styles.divider} />
        </Col>
        <Row className={Styles.cardController}>
          <animated.div style={featuresAnimation} className={`${Styles.card} featureCard`}>
            <h3>Data Mining</h3>
            <p>Analyzing data patterns.</p>
            <div>
              <Image src={'/1.png'} width={40} height={40} objectFit="contain" alt="feature-img" />
            </div>
          </animated.div>
          <animated.div style={featuresAnimation} className={`${Styles.card} featureCard`}>
            <h3>Machine Learning</h3>
            <p>Improving investment accuracy.</p>
            <div>
              <Image src={'/2.png'} width={40} height={40} objectFit="contain" alt="feature-img" />
            </div>
          </animated.div>
          <animated.div style={featuresAnimation} className={`${Styles.card} featureCard`}>
            <h3>Real-time Data</h3>
            <p>Using up-to-date information.</p>
            <div>
              <Image src={'/3.png'} width={40} height={40} objectFit="contain" alt="feature-img" />
            </div>
          </animated.div>
        </Row>
        <Col className={Styles.heading}>
          <h2 className={Styles.algorithmsHeading}>Algorithms Applied</h2>
        </Col>
        <div className={Styles.algorithmsSection}>
          <animated.div style={algorithmsAnimation} className={Styles.algorithm}>
            <img
              src={'/tick-mark.png'}
              alt="tick"
              style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            />
  
            <h3>Linear Regression</h3>
            <hr />
          </animated.div>
          <animated.div style={algorithmsAnimation} className={Styles.algorithm}>
            <img
              src={'/tick-mark.png'}
              alt="tick"
              style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            />
  
            <h3>Decision Trees</h3>
            <hr />
          </animated.div>
          <animated.div style={        algorithmsAnimation} className={Styles.algorithm}>
          <img
            src={'/tick-mark.png'}
            alt="tick"
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />

          <h3>Xgboost</h3>
          <hr />
        </animated.div>
        <animated.div style={algorithmsAnimation} className={Styles.algorithm}>
          <img
            src={'/tick-mark.png'}
            alt="tick"
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />

          <h3>Random Forest</h3>
          <hr />
        </animated.div>
      </div>
      <Col className={Styles.heading}>
        <h2 className={Styles.squadHeading}>The  Trio</h2>
        <Divider className={Styles.divider} />
      </Col>
      <Row justify="center" className={Styles.squadRow}>
        <animated.div style={squadAnimation}>
          <SquadCard
            photo="ShreyanshRai.jpg"
            name="Shreyansh Rai"
          
          />
        </animated.div>
        <animated.div style={squadAnimation}>
          <SquadCard
            photo="razaimage.jpeg"
            name="Raza Abbas"
          
          />
        </animated.div>
        <animated.div style={squadAnimation}>
          <SquadCard
            imageUrl="/squad-member-3.jpg"
            name="Aditya Choubey"
          />
        </animated.div>
      </Row>
      <Footer />
    </div>
  );
}

  
