import React from 'react';
export default class SliderDots extends React.Component{
    render(){
        if(this.props.dots)
            return(
                <div className="dots">
                    {
                        this.props.images.map((image,index)=>(
                            <span key={index} className={"dot"+(this.props.pos==index?' active':'')} onClick={()=>this.props.turn(index-this.props.pos)}>

                            </span>
                        ))
                    }
                </div>
            )
        else{
            return null;
        }
    }
}