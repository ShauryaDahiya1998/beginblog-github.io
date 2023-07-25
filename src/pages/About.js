import Header from "../components/Header.js";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../about.css'

const About = () => {

    const cardsContent = ["C++", "Javascript", "AWS", "ReactJs", "NextJs", "Microservices", "Couchbase"]
    return (
        <>
            <Header />
            <Container className="outerContainer textColor margins">
                <Row className="intro-section d-flex">
                    <Col md={4} className="placeCenter">
                        <img src="https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FofficialPic.jpeg?alt=media&token=f4393960-9640-49c1-af55-b89fe2d3929c" alt="Shaurya Dahiya" className="profile-photo" />
                    </Col>
                    <Col md={8}>
                        {/* <h1>About me</h1> */}
                        <p className="aboutMeText">Coding enthusiast with a passion for real-world problem-solving. I believe in utility over elegance. Always open for new and interesting opportunities. Here's a brief about me.</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                    <h2 className="placeCenter">What I've been upto</h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="October, 2022 - present"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FnirvaImage.png?alt=media&token=50b256fe-b158-4fbb-b109-92c338766ea6) center / cover no-repeat', color: '#e6b3b3' }}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Software Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">Nirva health</h4>
                            <ul className="textColor3">
                                <li>Worked as a <b>full stack</b> Software developer.</li>
                                <li>Built the entire internal tool for the app using NextJS, AWS Amplify, Retool.</li>
                                <li>Increased Overall Team efficiency by more than 150%</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="June, 2021 - October, 2022"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FelectricPe.jpeg?alt=media&token=43dce229-84e8-4baa-97d2-b25804a2a86c) center / cover no-repeat', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Software Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">Electric Pe</h4>
                            <p className="textColor3">Designed the backend for the mobile app to handle 10x the current tarffic. Implemented schema to increse turn around time by more than 50%.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="January, 2020 - June, 2020"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2Fcventimg.webp?alt=media&token=279f115a-2069-4875-a1f0-536ba1f3f176) center / cover no-repeat', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Software Developer Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">Cvent India</h4>
                            <p className="textColor3">Worked as a software developer with the core development team of the Survey product of Cvent. Improved the concurrency in cvent survey forms. Developed 20+ new features to improve the product feel and performance.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="July, 2020 - May, 2021"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FeladImg.jpeg?alt=media&token=fcbd104b-d345-4537-80ca-da0f8bcb5b91) center / cover no-repeat', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Secretary</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">English Literary and Debating Club</h4>
                            <p className="textColor3">Managed the college cultural fest with a footfall of over 10k from whole of India. Organized debates in various formats.</p>
                        </VerticalTimelineElement>
                        {/* Add more VerticalTimelineElement for your other educational background */}
                    </VerticalTimeline>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                    <h2 className="placeCenter">Here's what I can do</h2>
                    <div className="cardClass">
                        {cardsContent.map((card, index) => {
                            return (
                                <Card className="mb-4 custom-card" key={index}>
                                    <Card.Body>
                                        <Card.Title>{card}</Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                    <h2 className="placeCenter">All about my education</h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="August, 2022 - present"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FupennImage.png?alt=media&token=f1aee4d6-fc00-42ff-8ce7-c090496ff8ef) center / cover no-repeat', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Computer and Information Science (Masters)</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">University of Pennsylvania (SEAS)</h4>
                            <p className="textColor3">Description</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="July, 2017 - July, 2021"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2Fnitkkk.png?alt=media&token=2999aa0e-8d1f-43e8-a81b-5aa5e3efaa8a) center / cover no-repeat', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Computer Engineering - Information Technology (B.Tech)</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">National Institute of Technology, Kurukshetra</h4>
                            <p className="textColor3">9.4 CGPA</p>
                            <ul className="textColor3">
                                <li >Design and analysis of algorithms</li>
                                <li>Operating systems</li>
                                <li>Computer networks</li>
                                <li>Database management systems</li>
                                <li>Software engineering</li>
                                <li>Computer architecture</li>
                                <li>Compiler design</li>
                                <li>Machine learning</li>

                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May, 2015 - May, 2016"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FdpsLogo.png?alt=media&token=1bea2e8c-d767-48e2-8b5a-a944d5b74d1f) center / cover no-repeat', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">CBSE Class 12th</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">Delhi Public School, Ambala</h4>
                            <p className="textColor3">91.4%</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May, 2013 - May, 2014"
                        iconStyle={{ background: 'url(https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FdpsLogo.png?alt=media&token=1bea2e8c-d767-48e2-8b5a-a944d5b74d1f) center / cover no-repeat', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">CBSE Class 10th</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">Delhi Public School, Karnal</h4>
                            <p className="textColor3">10 CGPA</p>
                        </VerticalTimelineElement>
                        {/* Add more VerticalTimelineElement for your other work experiences */}
                    </VerticalTimeline>
                    </Col>
                </Row>
            </Container>
    </>
    )
}

export default About;



