import React from 'react';

function Cards(props) {
    console.log(props);

    return (
            <div className="card">
                <div className="img">
                    <img src={props.article.urlToImage} alt="" />
                </div>
                <div className="info">
                    <h3>{props.article.content?.substring(0,100).concat("...")}</h3>
                    <p>{props.article.description?.substring(0, 50).concat("...")}<a href={props.article.url} target='_blank_'>Read More...</a></p>
                    <div className="source">
                        <p>Author : {props.article.author}</p>
                        <p>{props.article.publishedAt}</p>
                    </div>
                </div>
            </div>


    )
}

export default Cards;
