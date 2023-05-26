import Header from "../components/Header.js";
import '../resumeStyle.css'

const Resume = () => {
    return (
        <div style={styleSheet.outerbox}>
            <Header />
            <div style={{margin:'50px'}}>
                <h1 className='head'>About</h1>
                <p className='content'>
                    shauryadahiya@gmail.com, +91-8813979721, LinkedIn <br/><br/>
                    Currently working as a software developer. Programming enthusiast with a passion for problem-solving.
                </p>
                <h1 className='head'>Education</h1>
                <table className='tableEdu'>
                    <tr className='tabRow'>
                        <th>Institute</th>
                        <th>Program</th>
                        <th>CGPA/Percentage</th>
                    </tr>
                    <tr className='tabRow'>
                        <td>National Institute of Technology Kurukshetra</td>
                        <td>B.Tech - Information Technology (2021)</td>
                        <td>9.3497 CGPA</td>
                    </tr>
                    <tr className='tabRow'>
                        <td>Delhi Public School, Ambala – CBSE Board</td>
                        <td>12th Standard (CBSE) (2016)</td>
                        <td>91.4%</td>
                    </tr>
                    <tr className='tabRow'>
                        <td>Delhi Public School, Karnal – CBSE Board</td>
                        <td>10th Standard (CBSE) (2014)</td>
                        <td>10 CGPA</td>
                    </tr>
                </table>
                <h1 className='head'>Skills</h1>
                <h3 className="head">Languages/Frameworks</h3>
                <p className='content'>C, C++, Java, JavaScript, Python, Java Dropwizard, Java Microservices, NodeJS, ReactJS, Android</p>
                <h3 className="head">Database</h3>
                <p className='content'>MySql, Couchbase, Hbase, MongoDB</p>
            
            </div>
        </div>
    )
}

const styleSheet = {
    outerbox: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#2E3B55'
    },
    
}


export default Resume;