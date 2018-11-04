import React, { Component } from 'react';
import { Button, Input, Icon } from 'antd';
import CustomInput from "./components/control/CustomInput";


class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button><p/>
        <CustomInput prefixIcon="user" value="Hello Debasish"/>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default App;
