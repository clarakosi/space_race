import React, { Component } from 'react';
import SignInButton from '../Navigation/SignInButton';
import StudentJoinCard from './StudentJoinCard';

class StudentJoinRacePage extends Component {
render() {
    return(
        <div>
        <SignInButton/>
        <StudentJoinCard/>
        </div>
    );
}
}
export default StudentJoinRacePage;