import React from "react";
import SimpleReactValidator from 'simple-react-validator';
import {Userform} from '../../components/pages/user/userform'



export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.validator = new SimpleReactValidator({
            className: "text-danger"
        });
        this.state = {
            isEditIndex:-1,userformobj: {
                name: "",
                age: "",
                dob: "",
                email: "",
                phone: "",
                status:""
            },
            userlist: [
                {
                    name: "Vijay",
                    age: "13",
                    dob: "10/10/2002",
                    email: "test@gmail.com",
                    phone: "9876543210",
                    status:"1"
                },
                {
                    name: "Anand",
                    age: "13",
                    dob: "10/10/2002",
                    email: "test@gmail.com",
                    phone: "9876543210",
                    status:"2"
                }
            ],


        }
    }




    
    handleformEdit = (data,i) => {
        console.log('Edit->',i);
        //setState doesnt update the state immediately'. So a callback function with console.log is used. 
        //Reference:https://www.edureka.co/community/71283/error-setstate-doesn-t-update-the-state-immediately
        //this.setState({userformobj:data, isEditIndex:i},()=>{console.log();});

    }

    

    handleformDelete=(i)=>{
        console.log('Delete->',i);
        this.state.userlist.splice(i,1);
        this.setState({userformobj:this.state.userlist})

    }

    handleUserformdata=(data)=>{
       // console.log('Data->',data)
        let userlist=[];
        if(this.state.isEditIndex !==-1){
        this.state.userlist[this.state.isEditIndex]= data;
        userlist=this.state.userlist;
        }else{
         userlist=[...this.state.userlist, data];
        }
       // console.log('userList-------->',userlist,data)
        this.setState({userlist:userlist})

    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {/* left side */}
                    <div className="col-6">
                       <Userform getUserformdata={this.handleUserformdata} editData={this.state.userformobj}/>


                    </div>

                    {/* Right side */}
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.userlist.map((data,i) =>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>{data.name}</td>
                                                    <td>{data.age}</td>
                                                    <td>{data.dob}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.phone}</td>
                                                    <td className={data.status==1?"text-primary":"text-danger"}>{data.status==1?"Active":"Suspended"}</td>
                                                    <td><button type="button" className="btn btn-primary" onClick={() => this.handleformEdit(data,i)}>Edit</button></td>
                                                    <td><button type="button" className="btn btn-danger" onClick={() => this.handleformDelete(i)}>Delete</button></td>
                                                </tr>

                                            )
                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}