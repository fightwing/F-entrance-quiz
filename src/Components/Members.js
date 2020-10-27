import React from 'react';
import axios from 'axios';

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Members: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
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
