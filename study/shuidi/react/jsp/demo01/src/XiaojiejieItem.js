import React, { Component } from 'react';
import PropTy from 'prop-types';
class XioajiejieItm extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return (
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务-{this.props.content}
            </li>
        );
    }
    handleClick(){
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
XioajiejieItm.PropTy = {
    avname:PropTy.string.isRequired,
    content:PropTy.string,
    index:PropTy.number,
    deleteItem:PropTy.func
}
export default XioajiejieItm