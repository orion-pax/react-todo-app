import React, { Component } from 'react'
import TodoItem from '../components/TodoItem'
import items from './todo-items'
import FloatingButtonComponent from './FloatingButtonComponent'
import todoItems from './todo-items'
import AddItemComponent from './AddItemComponent'

class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            todoItems: items,
            isLoading: true,
            show: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todoItems.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            return {
                todoItems: updatedTodos
            }
        })
    }

    handleShow() {
        this.setState( prevState => ({ show: !prevState.show}))
    }

    handleRemoveItem(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todoItems.filter(todo => {
                return todo.id !== id
            })
            return {
                todoItems: updatedTodos
            }
        })
    }

    handleAddNew(title) {
        this.setState(prevState => {
            const newId = prevState.todoItems.length + 1
            const updatedTodos = [...prevState.todoItems,
            {
                id: newId,
                title: title,
                completed: false
            }]
            return {
                todoItems: updatedTodos
            }
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
    }

    render() {

        const todos = this.state.todoItems.map(todo_item => <TodoItem handleChange={this.handleChange} handleRemoveItem={this.handleRemoveItem} item={todo_item} key={todo_item.id} />)

        return (
            <div>
                {
                    this.state.isLoading ? <div className="loading">loading</div> :
                        <div>
                            <div className="todo-list">
                                {todos}
                            </div>
                            {this.state.show ? <AddItemComponent handleAddNew={this.handleAddNew} show={this.state.show} handleShow={this.handleShow}/> : null}
                            <FloatingButtonComponent handleShow={this.handleShow} />
                        </div>
                }
            </div>
        )
    }
}

export default MainContent