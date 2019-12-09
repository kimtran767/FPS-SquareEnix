import React from 'react';

class CreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.comment;

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearElement = this.clearElement.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.props.history()
    };


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id)
    }



    render() {

        return (
            <div>
                <h2>Comment</h2>
                
                <form onSubmit={this.handleSubmit}>
                    
                    <input 
                        type="text"
                        onChange={this.update('body')}
                        value={this.state.body}/>

                    <input type='submit' value={this.props.formType} />
                </form>

            </div>
        )
    }
};

export default CreateForm;