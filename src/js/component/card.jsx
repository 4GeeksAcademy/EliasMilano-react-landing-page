import React from "react";

const Card = () => {
    return (
        <div className="card text-center my-2" style={{width:"325px", height:"500px"}} >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer bg-white">
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}


export default Card;