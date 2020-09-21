import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    const api = fetch('/api/todos');
    const jsonApi = api.then(res => res.json());
    jsonApi.then(todos => {
      this.setState({ todos: todos });
    });
    jsonApi.catch(err => console.error(err));
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {
    const postReq = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };
    const postApi = fetch('./api/todos', postReq);
    const jsonApi2 = postApi.then(res => res.json());
    jsonApi2.then(todo => {
      this.setState(state => {
        return { todos: state.todos.concat(todo) };
      });
    });
    jsonApi2.catch(err => console.error(err));
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * add the created todo to the state array.
     *
     * TIP: Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  toggleCompleted(todoId) {
    let findIndex = null;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].id) {
        findIndex = i;
      }
    }
    const targetTodo = this.state.todos[findIndex];
    const newIsCompleted = targetTodo.isCompleted;
    const updateIt = {
      isCompleted: !newIsCompleted
    };
    const patchReg = {
      method: 'PATH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateIt)
    };
    const patchApi = fetch(`./api/todos/${todoId}`, patchReg);
    const jsonApi3 = patchApi.then(res => res.json());
    jsonApi3.then(updatedTodo => {
      const newTodos = this.state.todos.slice();
      newTodos[findIndex] = updatedTodo;
      this.setState({ todos: newTodos });
    });
    /**
     * Find the index of the matching todo in the state array.
     * Find its "isCompleted" status.
     * Make a new Object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in state.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
