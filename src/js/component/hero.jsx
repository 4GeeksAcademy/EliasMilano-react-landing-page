import React from "react";

const Hero = () => {
    return (
        <div className="pt-4">
            <div className="col-11 p-3 mx-auto mt-5 mb-2 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-semibold">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;