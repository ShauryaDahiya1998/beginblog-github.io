import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";


const BlogArticle = () => {

    const { id } = useParams();
    const [articleData, setArticleData] = useState({});

    const fetchArticle = async (id) => {
        const docRef = doc(db, "blogArticles", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setArticleData(docSnap.data());
            // console.log(articleData.htmlContent)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        fetchArticle(id);
    }, []);

    useEffect(() => {
        console.log("Updated values", articleData);
    }, [articleData]);

   
    return ( 
        <div>
            <Header />
            {/* <img src={articleData.imageLink}/> */}
            <h1>{articleData.title}</h1>
            {articleData && articleData.htmlContent && parse(articleData.htmlContent)}
        </div>
     );
}
 
export default BlogArticle;