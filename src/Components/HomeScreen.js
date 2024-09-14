import React from "react";
import { Link } from "react-router-dom";

function HomeScreen () {
    return(
        <div style={ { padding: '20px', textAlign: 'center', backgroundColor: 'skyblue', minHeight: '100vh'} } >
           <h1> Customer Survey </h1>

           <Link to = "/survey">
           <button> Start Survey  </button>
           </Link>
        </div>
    )
}

export default HomeScreen;