import React, { Component } from 'react';
import QuestionCard from './AdminDeliveryPage';
import './AdminDeliveryPage.css';

class AdminDelivery extends Component {
    render() {
        return (
            <div>
                Admin Delivery Page
                <div className="main">
                    <QuestionCard />
                </div>
            </div>
        );
    }
}

export default AdminDelivery;
