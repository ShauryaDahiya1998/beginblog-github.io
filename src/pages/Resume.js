import Header from "../components/Header.js";
import '../resumeStyle.css'

const Resume = () => {
    return (
        <div style={styleSheet.outerbox}>
            <Header />
            <div style={{margin:'50px'}}>
                <h1 className='head'>Education</h1>
                <br style={{color:'white'}}/>
                <p className='content'>
                    Graduated from the University of California, Irvine with a B.S. in Computer Science and Engineering
                </p>
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