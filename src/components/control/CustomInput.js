import React, { Component } from 'react';
import { Icon, Input } from 'antd';

class CustomInput extends Component{
    render(){
        const placeHolder = this.props.placeHolder;
        const prefixIcon = this.props.prefixIcon;
        const value = this.props.value;
        let inputProps = {};
        if(placeHolder){
            inputProps.placeHolder = placeHolder;
        }
        if(prefixIcon){
            inputProps.prefix = <Icon type={prefixIcon} style={{ color: 'rgba(0,0,0,.25)' }} />;
        }
        if(value){
            inputProps.value = value;
        }
        return(
            <Input {...inputProps}/>
        );
    }
}

export default CustomInput;