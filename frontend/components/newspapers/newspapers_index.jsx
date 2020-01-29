import React from 'react';
import NewspapersItem from './newspapers_item';

class NewspapersIndex extends React.Component {

    constructor(props) {
        super(props);
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchNewspapers()
    }

    render() {
        const { newspapers } = this.props;

        return (
            <div className='news-whole'>
                <div className='news-index-content'>
                    {
                        newspapers.map(newspaper =>
                            <NewspapersItem
                                newspaper={newspaper}
                                key={newspaper.id}
                            />
                        )
                    }
                </div>
            </div>
            
        )
    }


};

export default NewspapersIndex;