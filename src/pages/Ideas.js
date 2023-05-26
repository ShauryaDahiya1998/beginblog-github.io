import Header from "../components/Header.js";
import {db} from "../firebase.js";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import '../ideas.css';


const Ideas = () => {

    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState("");

    const fetchPost = async () => {
        let querySnapshot = await getDocs(collection(db, "blogIdeas"))
        try {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setTodos(newData);
            console.log(todos)
        } catch (err) {
            console.log(err);
        }
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])

    useEffect(() => {
        console.log("Updated values", todos);
    }, [todos]);

    const handleChange = (event) => {
        setFormData(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "blogIdeas"), {
              content: formData,
              title: "Try Idea Save"  
            });
            console.log("Document written with ID: ", docRef.id);
            setTodos([...todos, {content: formData, title: "Try Idea Save"}]);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      };

    return (
        <div className='container'>
            <Header />
            <div className='flex-container'>
                <div className='todos-container'>
                    {todos.map((todo) => {
                    return (
                        <div key={todo.id} className='outerBox'> 
                        <h1>{todo.title}</h1>
                        <p>{todo.content}</p>
                        </div>
                    )
                    })}
                </div>
                <form className='formStyle' onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData} onChange={handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Ideas;