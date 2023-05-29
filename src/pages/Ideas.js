import Header from "../components/Header.js";
import {db} from "../firebase.js";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import '../ideas.css';

const Ideas = () => {

    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState("");
    const [formTitle, setFormTitle] = useState("");

    const fetchPost = async () => {
        let querySnapshot = await getDocs(collection(db, "blogIdeas"))
        try {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setTodos(newData);
            // console.log(todos)
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

    const handleContentChange = (event) => {
        setFormData(event.target.value);
    }

    const handleTitleChange = (event) => {
        setFormTitle(event.target.value);
    }

    const deleteItem = async (id) => {
        console.log(id)
        try {
            // await db.collection("blogIdeas").doc(id).delete();
            const docRef = doc(db, "blogIdeas", id);
            deleteDoc(docRef)
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (err) {
            console.log(err);
        }
        

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "blogIdeas"), {
              content: formData,
              title: formTitle  
            });
            // console.log("Document written with ID: ", docRef.id);
            setTodos([...todos, {content: formData, title: formTitle}]);
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
                            <h1 className="gridItem1">{todo.title}</h1>
                            <p className="gridItem2">{todo.content}</p>
                            <p className="gridItem3" onClick={() => deleteItem(todo.id)}>❌</p>
                        </div>
                    )
                    })}
                </div>
                <form className='formStyle' onSubmit={handleSubmit}>
                    <div className="formComp">
                        <label>Title: </label>
                        <input type="text" name="name" value={formTitle} onChange={handleTitleChange}/>
                    </div>
                    <div className="formComp">
                        <label>Idea: </label>
                        <textarea name="idea" value={formData} onChange={handleContentChange}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Ideas;