import React, {Component} from 'react'
import axios from 'axios'


class CreateTodos extends Component {

    constructor(props) {
        super(props);

        this.handleOnChangeTodoDescription = this.handleOnChangeTodoDescription.bind(this)
        this.handleOnChangeTodoResponsible = this.handleOnChangeTodoResponsible.bind(this)
        this.handleOnChangeTodoPriority = this.handleOnChangeTodoPriority.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

        // lo que voy a necesitar para crear 'Todo'
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    handleOnChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    }
    handleOnChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        });
    }
    handleOnChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        });
    }
    handleOnSubmit(e){
        e.preventDefault();

        console.log(`form submited:`)
        console.log(`Todo Description: ${this.state.todo_description}` )
        console.log(`Todo Responsible: ${this.state.todo_responsible}` )
        console.log(`Todo Priority: ${this.state.todo_priority}` )
        console.log(`Todo Completed: ${this.state.todo_completed}` )
        
        const newTodo = {
            todo_description : this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:8000/todos/add', newTodo)
            .then(res => console.log(res.data))

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });
    }

    render(){
        return (
            <div className="row d-flex justify-content-center">

                <div style={{marginTop:20}} className=" col col-12 col-xs-12 col-md-6">
                    <h3>Create New Todo</h3>
                    <form onSubmit={this.handleOnSubmit}>
                            <div className="form-group">
                                <label>Description:</label>
                                <input type="text" 
                                    className="form-control" 
                                    value={this.state.todo_description}
                                    onChange={this.handleOnChangeTodoDescription}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Responsible:</label>
                                <input type="text" 
                                    className="form-control" 
                                    value={this.state.todo_responsible}
                                    onChange={this.handleOnChangeTodoResponsible}
                                    />
                            </div>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityLow"
                                        value="Low"
                                        checked={this.state.todo_priority === 'Low'}
                                        onChange={this.handleOnChangeTodoPriority}
                                    />
                                    <label className="form-check-label">Low</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityMedium"
                                        value="Medium"
                                        checked={this.state.todo_priority === 'Medium'}
                                        onChange={this.handleOnChangeTodoPriority}
                                    />
                                    <label className="form-check-label">Medium</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityHigh"
                                        value="High"
                                        checked={this.state.todo_priority === 'High'}
                                        onChange={this.handleOnChangeTodoPriority}
                                    />
                                    <label className="form-check-label">High</label>
                                </div>
                            </div>
                        <div className="form-group">
                            <input type="submit" value="Create Todo" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default CreateTodos