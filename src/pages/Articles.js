import Header from "../components/Header.js";
// import { useLocation } from 'react-router-dom';
import ArticleCard from "../components/ArticleCard.js";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../articles.css";


const Ideas = () => {
    // const location = useLocation();
    const [articles, setArticles] = useState([]);
    // console.log(location);

    const fetchArticles = async () => {
        let querySnapshot = await getDocs(collection(db, "blogArticles"))
        try {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setArticles(newData);
            console.log(articles)
        } catch (err) {
            console.log(err);
        }
    }
   
    useEffect(()=>{
        fetchArticles();
    }, [])

    useEffect(() => {
        console.log("Updated values", articles);
    }, [articles]);


    return (
        <div className="container">
            <Header />
            {articles.map((article) => (    
                <Link to={article.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ArticleCard title={article.title} description={article.description} imageLink={article.imageLink}/>
                </Link>
            ))}
        </div>
    )
}

export default Ideas;