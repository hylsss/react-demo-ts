import * as React from "react";

 interface IState {
  count: number;
} 

// extends React.Component<props, state>
// props指定义父组件数据的数据类型
// strate指定义组件内部数据的数据类型
class Classcomponent extends React.Component<any, IState> {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          点击更新count
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default Classcomponent
