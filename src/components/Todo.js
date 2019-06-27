import React, {Component} from 'react';
import  Header from './Header'
import TodoItems from './Todoitems'

class Todo extends Component {
    state = {
        todoItems:['cook ','eat ','sleep ','Relax ',' pray'],
        newTodo: ""
    };
    handleChange = e =>  {
        this.setState({newTodo: e.target.value})
        console.log(e.target.value,)
    }
    
    handleSubmit = (e) => {
       this.setState(state => {
        const todoItems = this.state.todoItems.concat(state.newTodo) 
        return {
            todoItems,
            newTodo:'',
        }

        }) 
        console.log(this.setState.todoItems)
        e.preventDefault()
    }
    render(){
        
        return (
           <div>
            <Header title = 'My todo Title'/>
            <h1> Welcome To My Todo App</h1>
            {
                this.state.todoItems.map(item => (<TodoItems individualItem ={item}/>))

            }
           
        <form onSubmit={this.handleSubmit}>
          <label htmlFor ="">Todo: </label> <br /> 
          <input type="text" name="todo-items" value ={this.state.newTodo} onChange={this.handleChange} /> <br />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>

        </div>
        )
    }
}
export default Todo;