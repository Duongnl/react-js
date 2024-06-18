import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    // bien global
    state = {
        arrJobs: [
            { id: 'abcjob1', title: 'Developer', salary: '500' },
            { id: 'abcjob2', title: 'Testers', salary: '400' },
            { id: 'abcjob3', title: 'Project manager', salary: '1000' }
        ]
    }
    
    addNewJob = (job) => {
        this.setState ({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (id) => {  

        this.setState ({
            arrJobs: this.state.arrJobs.filter(job => job.id != id)
        })
    }

    render() {
        return (
            <>
                <AddComponent
                addNewJob = {this.addNewJob}
               
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob = {this.deleteJob}
                />
            </>
        )
    }




}
export default MyComponent