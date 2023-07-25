import FooterComp from "../components/FooterComp.js";
import Header from "../components/Header.js";
import PdfViewer from "../components/PdfViewer.js";
import "../resume.css"

const Resume = () => {
    const handleRedirect = () => {
        // Replace 'https://example.com' with the desired link
        window.open('https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FShaurya_Resume_UPenn.pdf?alt=media&token=f3f2d7a0-b3e5-4a52-aedf-3035863ac04e', '_blank');
      };
    return (
        <div>
            <Header/>
            <div className="outerDiv">
                <PdfViewer/>
                <button className="buttonClass" onClick={handleRedirect}>Download</button>
            </div>
            <FooterComp />
        </div>
    )
}


export default Resume;