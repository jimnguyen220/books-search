import React from "react";
import Row from "../components/Row"
import API from "../utils/API"


function Main() {

    return (
        <>
            <Row />

            <div className="col-md-4 col-lg-4">
                <img src={process.env.PUBLIC_URL + '/assets/myPhoto.png'} alt="myPhoto"></img>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 bg-secondary">

            </div>

        </>
    )
}

export default Main;