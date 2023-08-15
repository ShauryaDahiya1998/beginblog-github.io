import FooterComp from "../components/FooterComp.js";
import Header from "../components/Header.js";
import PdfViewer from "../components/PdfViewer.js";
import "../resume.css"

const Resume = () => {
    const handleRedirect = () => {
        // Replace 'https://example.com' with the desired link
        window.open('https://firebasestorage.googleapis.com/v0/b/blogsupport.appspot.com/o/timeline_images%2Fshaurya_intern_resume.pdf?alt=media&token=0eeffddb-8edd-4de8-81d8-6313c9f17dbb', '_blank');
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