import Pizzatypes from './Pizzatypes';
import React from 'react';

class Types extends React.Component{
    render(){
        return (
            <div class="container pizza- types">
                <div class="row">
                    <h3 class="text-center">Pizza Types</h3>

                    <div class="col-md-3">
                        <Pizzatypes name = "Vegetarian Pizza" img = "images/brenan-greene-HPZs4EXRFSU-unsplash.jpg" />
                    </div>

                    <div class="col-md-3">
                        <Pizzatypes name = "Pepperini Pizza" img = "images/alan-hardman-SU1LFoeEUkk-unsplash.jpg" />
                    </div>

                    <div class="col-md-3">
                        <Pizzatypes name = "Cheese Pizza" img = "images/ivan-torres-MQUqbmszGGM-unsplash.jpg" />
                    </div>

                    <div class="col-md-3">
                        <Pizzatypes name = "Bossu Pizza" img = "images/sheri-silver-A4EtgLN1_Fw-unsplash-300x213.jpg" />
                  </div>
                    
                </div>
            </div>
        )
    }
}

export default Types;