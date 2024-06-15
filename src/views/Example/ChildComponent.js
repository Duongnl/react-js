import React from "react";

// dung class de co the xu ly duoc nhieu du lieu hon
class ChildComponent extends React.Component {

    // JSX chỉ return về 1 khối, chỉ có 1 lớp bọc ở ngoài cùng, chỉ 1 thẻ
    // nếu muốn trả về 2 thẻ div,... thì dùng React.Fragment hoặc <> </>

    // render ra du lieu, day la mot ham, funtion

    //  biến glodbal
    state = {
        name: '',
        channel: "App Basic"
    }

    // arrow function
    handleClickButton = (bien) => {
        alert( bien + " clicked button !")
    }

    handleOnChange = (event) => {
        console.log(event);
        // ham get set  ne
        this.setState({
              name: event.target.value,
        })

    }

    render() {
        console.log('>> check props: ', this.props)

        let {name,age, address, arrJobs} = this.props

        return (
            <>
                <div>
                    Props : {name} - {age} - {address}
                </div>

                <div className="job-lists" >
                    {
                        arrJobs.map(
                            (item,index) => {
                                return (
                                    <div key={item.id} >
                                        {item.title} - {item.salary}
                                    </div>
                                )
                            }
                        )
                    }
                </div>


                <div>  
                    <input  value={this.state.name} type="text"
                     onChange={(event) => this.handleOnChange(event)} 
                    />
                </div>
                <div className="first" >
                    My name is : {this.state.name}
                </div>
                <div className="second" >
                    Well come to my {this.state['channel']}
                </div>
                <div className="third" >
                    <button onClick= { () =>this.handleClickButton(this.state.name)  } > Click here </button>
                </div>
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