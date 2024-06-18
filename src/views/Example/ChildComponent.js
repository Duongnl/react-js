import React from "react";

// dung class de co the xu ly duoc nhieu du lieu hon
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handelShow = () => {
        this.setState({
            showJobs: true
        })
    }

    handelHide = () => {
        this.setState({
            showJobs: false
        })
    }

    handelDelete = (id) => {
       let {deleteJob} = this.props
       deleteJob(id)
    }

    
    render() {
        let { arrJobs } = this.props
        let { showJobs } = this.state
        let check = showJobs ===  true ? 'showJobs = true' : 'showJobs = false';

        return (
            <>
                {!showJobs ? <>
                    <div>
                        <button
                            onClick={() => this.handelShow()}
                        >Show</button>
                    </div>
                </>
                :
                    <>
                        <div className="job-lists" >
                            {
                                arrJobs.map(
                                    (item, index) => {
                                        if (item.salary >= 500) {
                                            return (
                                                <div key={item.id} >
                                                    {item.title} - {item.salary} <span><button
                                                    onClick={() => this.handelDelete(item.id)}
                                                    >X</button></span>
                                                </div>
                                            )
                                        }

                                    }
                                )
                            }
                        </div>
                        <div>
                            <button
                                onClick={() => this.handelHide()}
                            >Hide</button>
                        </div>
                    </>
                
                }
            </>
        )
    }
}

// day la mot function, chi dung khi co props va chi hien thi   thoi khong xu ly gi ca
// const ChildComponent = (props) => {
//     console.log(props)
//     let {arrJobs} = props
//     return (
//         <>
//             <div className="job-lists" >
//                 {
//                     arrJobs.map(
//                         (item, index) => {
//                             if (item.salary >= 500) 
//                             {
//                                 return (
//                                     <div key={item.id} >
//                                         {item.title} - {item.salary} $
//                                     </div>
//                                 )
//                             }

//                         }
//                     )
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;