import React from 'react';
import SliderItems from './SliderItems';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';
import './Slider.less';
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={pos:0};
    }
    turn(n){
        let pos=this.state.pos;
        pos+=n;
        if(pos>=this.props.images.length){
            pos=0
        }
        if(pos<0){
            pos=this.props.images.length-1;
        }
        this.setState({pos});
    }
    play(){
        this.$timer=setInterval(()=>{
            this.turn(1);//////////////
        },this.props.interval*1000)
    }
    componentDidMount(){
        if(this.props.autoplay){
            this.play();
        }
    }
    render(){
        let images=this.props.images;
        let style={
            width:500*images.length,
            left:this.state.pos*-500,
            transitionDuration:this.props.speed+'s'
        };
        return(
            <div onMouseOver={()=>clearInterval(this.$timer)} onMouseOut={()=>this.play()} className="wrapper">
                <SliderItems images={images} style={style}/>
                <SliderArrows turn={this.turn.bind(this)} arrows={this.props.arrows}/>
                <SliderDots turn={this.turn.bind(this)} pos={this.state.pos} images={this.props.images} dots={this.props.dots}/>
            </div>
        )

    }
}