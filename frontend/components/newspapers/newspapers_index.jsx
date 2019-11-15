import React from 'react';
import NewspapersItem from './newspapers_item';

class NewspapersIndex extends React.Component {

    componentDidMount() {
        this.props.fetchNewspapers()
    }

    render() {
        const { newspapers } = this.props;

        return (
            <div className='news-whole'>
                <div className='news-index'>
                    <div className='news-index-emtpy'></div>
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

                    <div className='news-index-emtpy'></div>
                </div>
            </div>
            
        )
    }


};

export default NewspapersIndex;