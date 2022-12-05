import React from "react";


export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userformobj: {
                name: "",
                age: "",
                dob: "",
                email: "",
                phone: ""
            },

            userlist: [
                {
                    name: "Vijay",
                    age: "13",
                    dob: "2000/10/10",
                    email: "test@gmail.com",
                    phone: "9876543210"
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
        console.log(this.state.userformobj);
        let userlist=[...this.state.userlist, this.state.userformobj];
        this.setState({userlist:userlist});
        let userformobj= {
            name: "",
            age: "",
            dob: "",
            email: "",
            phone: ""
        }
        this.setState({userformobj:userformobj});
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
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Age</label>
                                            <input type="number" className="form-control" value={this.state.userformobj.age} id="age" onChange={this.handleformvalue} placeholder="Age" />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">DOB</label>
                                            <input type="date" className="form-control" value={this.state.userformobj.dob} id="dob" onChange={this.handleformvalue} placeholder="DOB" />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" value={this.state.userformobj.email} id="email" onChange={this.handleformvalue} placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone</label>
                                            <input type="number" className="form-control" value={this.state.userformobj.phone} id="phone" onChange={this.handleformvalue} placeholder="Phone" />
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.userlist.map((data)=>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>{data.name}</td>
                                            <td>{data.age}</td>
                                            <td>{data.dob}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
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