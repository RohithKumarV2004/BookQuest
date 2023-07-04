import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAbJc85Mi-G6vUwtDaCfIxFZvbnSwwQTeQ&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <React.Fragment>
            <div className="header">
                {/* <div className="row1">
                   <h1>A room without books is like<br/> a body without a soul.</h1>
                </div> */}
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    {/* <img src="./images/bg2.png" alt="" /> */}
                    <p className="row1">Welcome to Book Quest! We're delighted to have you here. <br/>Whether you're on the hunt for a specific book or looking for new reading recommendations, you're in the right place. <br/>Feel free to explore our vast collection or use our search feature to find any book you desire. Happy reading!</p>
                </div>
            </div>

            <div className="container">
              { 
                    <Card book={bookData}/>
              }  
            </div>
        </React.Fragment>
        
    )
}
export default Main;