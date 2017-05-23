import React from 'react';
export default class SliderItems extends React.Component{
    render(){
        return(
            <ul className="sliders" style={this.props.style}>
                {
                    this.props.images.map((image,index)=>(
                        <li className="slider" key={index}>
                            <img src={image.src} alt=""/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}