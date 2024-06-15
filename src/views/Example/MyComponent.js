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

    render() {
        console.log('>>> call render : ', this.state)
        return (
            <>
                <AddComponent/>
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }




}
export default MyComponent