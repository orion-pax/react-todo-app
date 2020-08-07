import React, { Component } from 'react';

class AddItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.task != ""){
            this.props.handleShow()
            this.props.handleAddNew(this.state.task)
         }else{
            this.props.handleShow()
            return
         }  
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

        
    }

    render() {
        const displayType = this.props.show ? "block" : "none";
        return (
            <div className="modal" style={{ display: { displayType } }}>

                <div className="modal-body">
                    <button className="btn-rounded modal-close" onClick={() => this.props.handleShow()}>x</button>
                    <form >
                        <input type="text"
                            placeholder="Enter task details"
                            name="task"
                            onChange={this.handleChange}
                            value={this.state.task}
                            className="form-input"
                        />
                        <button onClick={this.handleSubmit} className="right save">save</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddItemComponent;
