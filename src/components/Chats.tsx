import React from 'react'
import { List, Avatar } from 'antd';

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

class Chats extends React.Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.message}
          />
          </List.Item>
        )}
      />
    )
  }
}

export default Chats
