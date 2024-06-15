import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    // bien global
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcjob1', title: 'Developer', salary: '500' },
            { id: 'abcjob2', title: 'Testers', salary: '400' },
            { id: 'abcjob3', title: 'Project manager', salary: '1000' }
        ]
    }

    student = {

    }

    handleChangeFristName = (event) => {
        this.setState({
            firstName: event.target.value

        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value

        })
    }

    handleSubmit = () => {
        alert("Hello")
        console.log(">>> check data input", this.state)
    }

    render() {
        console.log('>>> call render : ', this.state)
        return (
            <>
                <form>

                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFristName(event)}
                    /><br />

                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br />

                    <input type="button" value="Click here"
                        onClick={() => this.handleSubmit()}
                    />

                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'18'}
                    address={'Quang tri'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }




}
export default MyComponent