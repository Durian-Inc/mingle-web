import React from 'react'
import { List, Avatar } from 'antd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as chatsActions from "../actions/chatsActions";

const data = [
  {
    title: 'Ant Design Title 1',
    message: 'Hello friend'
  },
  {
    title: 'Ant Design Title 2',
    message: 'Hello wife'
  },
  {
    title: 'Ant Design Title 3',
    message: 'Hello comrade'
  },
  {
    title: 'Ant Design Title 4',
    message: 'Hello enemy'
  },
];

interface IProps{ chats: any }
interface IState{}

class Chats extends React.Component<any> {
  componentDidMount() {
    this.props.chatsActions.fetchChats();
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.chats}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={item.created}
          />
          </List.Item>
        )}
      />
    )
  }
}

function mapStateToProps(state: any) {
  return {
    chats: state.chats
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    chatsActions: bindActionCreators(chatsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
