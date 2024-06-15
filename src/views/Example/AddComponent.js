import React from "react";

class AddComponent extends React.Component {

        // bien global
        state = {
            titleJob: '',
            salary: '',
        }

    handleChangTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value

        })
    }

    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value

        })
    }

    handleSubmit = () => {
        alert("Hello")
        console.log(">>> check data input", this.state)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job title:</label><br />
                    <input type="text" value={this.state.titleJob}
                        onChange={(event) => this.handleChangTitleJob(event)}
                    /><br />

                    <label htmlFor="lname">Salary :</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleChangesalary(event)}
                    /><br />

                    <input type="button" value="Submit"
                        onClick={() => this.handleSubmit()}
                    />
                </form>
            </>

        )

    }



}

export default AddComponent