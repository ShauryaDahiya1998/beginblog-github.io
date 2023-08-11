import FooterComp from "../components/FooterComp.js";
import Header from "../components/Header.js";
import PdfViewer from "../components/PdfViewer.js";
import "../resume.css"

const Resume = () => {
    const handleRedirect = () => {
        // Replace 'https://example.com' with the desired link
        window.open('https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2FShaurya_Resume_PDF.pdf?alt=media&token=8fc3eb2b-44dd-4aeb-ac69-54fc7b637706', '_blank');
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