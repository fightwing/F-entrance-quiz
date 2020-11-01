import React from 'react';
import axios from 'axios';

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO GTB-4: - 变量命名首字母小写
      Members: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    // TODO GTB-4: - 可以抽取出API请求层，且axios的使用可以优化
    await axios({ method: 'GET', url: 'http://localhost:8080/members' })
      .then(console.log(Response))
      .then((result) => {
        this.setState({
          Members: result,
        });
      });
  };

  render() {
    return (
      // TODO GTB-3: - 加强语义化标签的使用
      <div>
        <h1>学员列表</h1>
        <div>
          {this.state.Members.length &&
            this.state.Members.map((one) => (
              <div>
                {one.id}.{one.name}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default Members;
