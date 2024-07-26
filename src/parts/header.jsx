import React, { useEffect, useState } from 'react';
import Cards from './cards';
import "./parts.css";

function Header() {

    let [search,setsearch]=useState("india");
    let [articles,setarticles]=useState([]);

    
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=2fd0b80d477a409993debdbbb537f13d`)
        .then((response)=>response.json())
        .then((data)=>{
            setarticles(data.articles)
            console.log(data.articles);
        })
        .catch((error)=>{
            console.log("There is an error...");
        })
    },[search])


    const handelchange=(e)=>{
        if(e.target.value!==""){
            setsearch(e.target.value);
        }
        else{
            setsearch("bitcoin");
        }
    }

    return (
        <>
        

                <div className="navbar">
            <div className="logo">
                <h1>Apna News</h1>
            </div>
            <div className="inputs">
                <input type="text" name="" id="search" placeholder='Search here...' onChange={handelchange}/>
            </div>
        </div>



        <div className="midpart">
            {
                articles.map((article)=>{
                    return(
                        <Cards article={article} />
                    )
                })
            }
        </div>

        </>
    )
}

export default Header;

