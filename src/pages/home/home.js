import React from "react";
import SimpleReactValidator from 'simple-react-validator';



export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.validator = new SimpleReactValidator({
            className: "text-danger"
        });
        this.state = {
            isEditIndex:-1,
            userformobj: {
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
                }
            ]


        }
    }


    handleformvalue = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.id);
        const value = event.target.value;
        const id = event.target.id;
        this.setState({
            userformobj: {
                ...this.state.userformobj, [id]: value
            }
        });
    }

    handleformsubmit = () => {
        if (this.validator.allValid()) {
            console.log(this.state.userformobj);
            let userlist=[];
            if(this.state.isEditIndex !==-1){
            this.state.userlist[this.state.isEditIndex]= this.state.userformobj;
            userlist=this.state.userlist;
            }else{
             userlist=[...this.state.userlist, this.state.userformobj];
            }
            
            let userformobj = {
                name: "",
                age: "",
                dob: "",
                email: "",
                phone: "",
                status:""
            }
            this.setState({ userlist:userlist, userformobj: userformobj, isEditIndex:-1 });
        } else {
            this.validator.showMessages();
            // re-render the UI to show alert messages
            this.forceUpdate();
            //alert("Fill all the fields");
        }
    }

    handleformEdit = (data,i) => {
        console.log(data,i);
        this.setState({ userformobj: data, isEditIndex:i })
    }

    handleformDelete=(i)=>{
        this.state.userlist.splice(i,1);
        this.setState({userformobj:this.state.userlist})
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {/* left side */}
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" value={this.state.userformobj.name} id="name" onChange={this.handleformvalue} placeholder="Name" />
                                            {this.validator.message('name', this.state.userformobj.name, 'required')}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Age</label>
                                            <input type="number" className="form-control" value={this.state.userformobj.age} id="age" onChange={this.handleformvalue} placeholder="Age" />
                                            {this.validator.message('age', this.state.userformobj.age, 'required|numeric|min:10,num')}
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">DOB</label>
                                            <input type="date" className="form-control" value={this.state.userformobj.dob} id="dob" onChange={this.handleformvalue} placeholder="DOB" />
                                            {this.validator.message('dob', this.state.userformobj.dob, 'required')}
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" value={this.state.userformobj.email} id="email" onChange={this.handleformvalue} placeholder="Email" />
                                            {this.validator.message('email', this.state.userformobj.email, 'required|email')}
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone</label>
                                            <input type="number" className="form-control" value={this.state.userformobj.phone} id="phone" onChange={this.handleformvalue} placeholder="Phone" />
                                            {this.validator.message('phone', this.state.userformobj.phone, 'required')}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Status</label>
                                            <select class="form-select" value={this.state.userformobj.status} id="status" onChange={this.handleformvalue}>
                                                <option value="1">Active</option>
                                                <option value="2">Suspend</option>                                            </select>
                                            {this.validator.message('select', this.state.userformobj.phone, 'required')}
                                        </div>
                                    </div>

                                </div>
                                <div className="row"><div className="col-6">
                                    <div className="mb-3">
                                        <button type="button" className="btn btn-primary" onClick={this.handleformsubmit}>Submit</button>
                                    </div>
                                </div></div>

                            </div>
                        </div>


                    </div>

                    {/* Right side */}
                    <div className="col-6">
                        <div class="card">
                            <div class="card-body">
                                <table class="table">
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
                                                    <td><button type="button" className="btn btn-danger" onClick={() => this.handleformDelete(data,i)}>Delete</button></td>
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