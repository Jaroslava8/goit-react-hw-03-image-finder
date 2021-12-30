import React from "react";
import Loader from "react-loader-spinner";

class LoaderSpinner extends React.Component{
    state= {}
    render(){
        return(
            <div>
            <Loader
            type="Puff"
            color=" #00BFFF"
            height={100}
            width={100}
            timeout={3000}
            visible={true} 
          />
          </div>
        )
    }
}
export default LoaderSpinner;