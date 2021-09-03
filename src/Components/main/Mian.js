import React from "react";
import HornedBeasts from "./HornedBeasts";
import HornsData from "./HornsData.json"

class Main extends React.Component{


    

    render(){
        return(
            <>
            {HornsData.map(item =>{

                return (
                    <HornedBeasts
                    title={item.title}
                    imgUrl={item.image_url}
                    description={item.description}
                    />
                )

            })}
            
            </>


        )
           
    }
}

export default Main 