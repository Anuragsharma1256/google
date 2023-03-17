import { Fragment } from "react";

function Header(props){
    return(
        <h1>{props.name}</h1>
    );
}


function Inputfield(){
    return(
        <Fragment>
            <input type = "text" width="100%" placeholder = "mobile..."></input>
            <br></br>
            <br></br>

            <input type = "text" width="100%" placeholder = "password..."></input>
        </Fragment>
    );
}

function Submitbutton(props){
    return(
        <button>{props.button}</button>
    );
}

export default function Total() {
    const name = "Register here ...";
    const button = "Submit";
    return (
        <section>
            <br></br>
            <h1><Header name={name}/></h1>
            <Inputfield/>
            <br></br>
            <br></br>
            <Submitbutton button ={button}/>
        </section>
    );
}