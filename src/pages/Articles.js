import Header from "../components/Header.js";
import { useLocation } from 'react-router-dom';

const Ideas = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Header />
            <h1>Articles</h1>
        </div>
    )
}

export default Ideas;