import React from "react";

const Card = () => {
    return (
        <div className="card text-center my-2" style={{width:"325px", height:"500px"}} >
            <img src="https://raw.githubusercontent.com/4GeeksAcademy/EliasMilano-react-landing-page/refs/heads/main/src/img/placehold-500x325.png" className="card-img-top" alt="placehold-500x325" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
            </div>
            <div className="card-footer bg-white">
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;