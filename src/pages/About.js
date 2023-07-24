import Header from "../components/Header.js";
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../about.css'

const About = () => {
    return (
        <div className="container">
            <Header />
            <Container className="outerContainer textColor">
                <Row>
                    <Col md={12}>
                    <h1>About Me</h1>
                    <p>Your brief goes here...</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                    <h2>Education</h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#5f45b6' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Bachelor of Science in Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">University of California, Berkeley</h4>
                            <p>Description</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#5f45b6' }}
                        // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title textColor2">Bachelor of Science in Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle textColor2">University of California, Berkeley</h4>
                            <p>Description</p>
                        </VerticalTimelineElement>
                        {/* Add more VerticalTimelineElement for your other educational background */}
                    </VerticalTimeline>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                    <h2>Skills</h2>
                    <p>Your skills go here...</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                    <h2>Work Experience</h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>Description</p>
                        </VerticalTimelineElement>
                        {/* Add more VerticalTimelineElement for your other work experiences */}
                    </VerticalTimeline>
                    </Col>
                </Row>
            </Container>
    </div>
    )
}

export default About;



