import Header from "../components/Header.js";
import {db} from "../firebase.js";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import '../ideas.css';
import { auth } from "../firebase.js";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Ideas = () => {

    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true); // For switching between sign-up and log-in

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
        // write a function for user authenticaion and store the user in user state
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        
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

    const signInLogInToggle = () => {
        setIsSignUp(!isSignUp);
    }

    const handleAuth = (event) => {
        event.preventDefault();
        if (isSignUp) {
          // Sign up with email and password
          createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
              // You can handle the sign-up success here
              console.log('Sign-up success!', userCredential.user);
            })
            .catch((error) => {
              // Handle sign-up errors here
              console.error('Sign-up error:', error);
            });
        } else {
          // Log in with email and password
          signInWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
              // You can handle the log-in success here
              console.log('Log-in success!', userCredential.user);
            })
            .catch((error) => {
              // Handle log-in errors here
              console.error('Log-in error:', error);
            });
        }
      };

      async function handleSignOut() {
        try {
          await signOut(auth);
          // Sign-out successful.
        } catch (error) {
          // An error happened.
        }
      }
    
    return (
        <div className='container'>
            <Header />
            <div className='flex-container'>
                {user ? (
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
                ) : (
                    <div className='blur-div todos-container'>
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
                )
                }
                {user ? (
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
                        <button className="signOutButton" onClick={handleSignOut}>Sign Out</button>
                    </form>
                    ) : (
                        <form className='formStyle' onSubmit={handleAuth}>
                            <div className="formLock">
                                <div>
                                🔒
                                </div>
                                <button onClick={signInLogInToggle}>{isSignUp?'Log In':'Sign Up'}</button>
                            </div>   
                            <div className="formComp">
                                <label>Email: </label>
                                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="formComp">
                                <label>Password: </label>
                                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <input type="submit" value={isSignUp?'Sign Up':'Log In'} />
                        </form>
                    )
                 }
            </div>
        </div> 
    )
}

export default Ideas;