import React, { Component } from 'react';
import Members from '../Components/Members';
import './App.scss';

// TODO GTB-1: * 未实现任一功能
// TODO GTB-1: * 没有样式，且只能看到“学员列表几个字”，但成功发送学员列表请求及返回数据
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 没有进行组件划分
// TODO GTB-3: * 没有使用语义化标签
// TODO GTB-3: * 没有写样式
// TODO GTB-3: * 使用了ES6+语法及axios，不过完成度很低较多内容无法验证
// TODO GTB-3: * 使用了React知识点，不过完成度很低较多内容无法验证
// TODO GTB-4: * 没有小步提交，且提交message不可读
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 完成度低，一些工程化实践无法验证，如组件拆分等
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Members />
      </div>
    );
  }
}

export default App;
