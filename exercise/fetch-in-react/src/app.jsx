import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */
    const firstApi = fetch('https://jsonplaceholder.typicode.com/users');
    const jsonApi = firstApi.then(res => res.json());
    const newArray = jsonApi.then(users => this.setState ({ 
      users: users,
      isLoading: false
    }));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users}/>;
  }
}

export default App;
