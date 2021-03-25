import React from 'react';

class Pizzatypes extends React.Component{
    render(props){
        return (
        <div class="thumbnail">
            <img src = {this.props.img}/>
            <div class="caption">
                <h3>{this.props.name}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Doloremque assumenda sed, nihil error quos minima perspiciatis est vitae 
                    expedita quaerat deserunt eligendi corrupti ad natus officia non explicabo!
                    Nisi, id!
                </p>
            </div>  

        </div>
        )      
    }
}

export default Pizzatypes;