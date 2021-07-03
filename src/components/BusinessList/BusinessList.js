import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render () {
        return ( 
            <div classname="BusinessList">
                {
                    this.props.business.map((business) => {
                        return <Business business = {business} key = {business.id}/>;
                    })
                }
            </div>
        )
    }
}

export default BusinessList;