import React from 'react';


class UpdateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.comment;
    }

    componentDidMount() {
        this.props.fetchComment(this.props.match.params.comment.id)
    }
    render() {
        <div>
            {this.state.body}
        </div>
    }
};

export default UpdateForm;