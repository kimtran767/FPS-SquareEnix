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
        this.props.createComment(this.state)
    };


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id);
    }

    render() {

        return (
            <div className='comment-form'>
                <h2 className='comment-h2'>Comment</h2>
                <form className='inside-comment-form' onSubmit={this.handleSubmit}>
                    <textarea className='comment-input'
                        type="text"
                        placeholder='Join the discussion'
                        onChange={this.update('body')}
                        value={this.state.body}/>

                    <input type='submit' value={this.props.formType} />
                </form>

            </div>
        )
    }
};

export default CreateForm;