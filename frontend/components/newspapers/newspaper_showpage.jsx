import React from 'react';


class NewspaperShow extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchNewspaper(this.props.match.params.newspaperId)
    };

    render() {
        if (!this.props.pulp) {
            return null;
        }
        
        const { newspaper, pulp } = this.props;

        const pulpItem = pulp.map( item => {

            let photo;

            if (item.photoUrl) {
                photo = item.photoUrl;  
            } 
 
                return (
                    <ul key={item.key}>
                        <br/>
                        <h2>
                            {item.title}

                        </h2>
                        <br/>
                        {item.body}
                        <br/>
                            <img src={photo} className='newsImg'/>
                        <br/>
                    </ul>
                )
            
        })

        return (
            <div>
                {newspaper.body}
                <br/>
                {pulpItem}
            </div>
        )
    }
};

export default NewspaperShow;