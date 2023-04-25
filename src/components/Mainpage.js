import ReactTypingEffect from 'react-typing-effect';

const Mainpage = () => {
    
    return ( 
        <div style={styleSheet.outerBox}>
            <div style={styleSheet.mainBox}>
                <ReactTypingEffect style={styleSheet.centreText} typingDelay = {500} speed={100} eraseSpeed={50} eraseDelay={2000}
                    text={["Good, you're here!", "Welcome! Let's dive deep"]}
                />
            </div>
            <div style={styleSheet.lowerBox}>
                <ReactTypingEffect style={styleSheet.lowerText} typingDelay = {3000} speed={100} eraseDelay={100000}
                    text={"CI/CD works."}
                />
            </div>
        </div>
     );
}
 
const styleSheet = {
    mainBox: {
        height: "700px",
        display: "flex",
        backgroundColor: "#200d4a",
        justifyContent: 'center',
        alignItems: "center"
    },
    outerBox: {
        height: "1000px",
    },
    lowerBox: {
        height: "300px",
        display: "flex",
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: "center"
    },
    centreText: {
        display: "flex",
        height: '50px',
        fontWeight: "500",
        fontSize: "50px",
        color: 'white'
    },
    lowerText: {
        display: "flex",
        height: '50px',
        fontWeight: "300",
        fontSize: "30px",
        color: 'black'
    }
}
export default Mainpage