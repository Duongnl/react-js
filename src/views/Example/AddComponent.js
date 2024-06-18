import React from "react";

class AddComponent extends React.Component {

        // bien global
        state = {
            title: '',
            salary: '',
        }

    handleChangTitle = (event) => {
        this.setState({
            title: event.target.value

        })
    }

    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value

        })
    }

    handleSubmit = () => {
     
        let { addNewJob } = this.props
        addNewJob({
            id: Math.floor(Math.random() * 1000),
            title : this.state.title,
            salary : this.state.salary
        })

    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job title:</label><br />
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handleChangTitle(event)}
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