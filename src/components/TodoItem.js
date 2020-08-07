import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const {item} = this.props
        const textClass = item.completed ? "completed" : null
        return (
            <div className="todo-item">
                <label className={textClass} >
                    <input type="checkbox" 
                        onChange={()=> this.props.handleChange(this.props.item.id)}
                        value={this.props.item.id}
                        checked={this.props.item.completed} 
                    />

                    {this.props.item.title}
                </label>
                <button className="delete btn-rounded" onClick={()=> this.props.handleRemoveItem(this.props.item.id)}>-</button>
            </div>
        )
    }
}

export default TodoItem