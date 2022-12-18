import React from "react";
import SimpleReactValidator from 'simple-react-validator';


export class Userform extends React.Component{

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
        }
    }

    handleformvalue = (event) => {
         console.log(event.target.value);
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
          //  console.log('submit->',this.state.userformobj);
           
            
            let userobj = {
                name: "",
                age: "",
                dob: "",
                email: "",
                phone: "",
                status:""
            }

            this.props.getUserformdata(this.state.userformobj)            

            this.setState({userformobj: userobj, isEditIndex:-1 });
        } else {
            this.validator.showMessages();
            // re-render the UI to show alert messages
            this.forceUpdate();
            //alert("Fill all the fields");
        }
    }

    handleformclear = () => {
            let userobj = {
                name: "",
                age: "",
                dob: "",
                email: "",
                phone: "",
                status:""
            }
            this.setState({isEditIndex:-1 });
           //console.log('form clear',this.state.isEditIndex);
           console.log('UserformObj', this.state.isEditIndex);
    }

    
   
    render(){
        return(
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
                            <select className="form-select" value={this.state.userformobj.status} id="status" onChange={this.handleformvalue}>
                            <option selected>Open this select menu</option>
                                <option value="1">Active</option>
                                <option value="2">Suspend</option>                                            </select>
                            {this.validator.message('select', this.state.userformobj.status, 'required')}
                        </div>
                    </div>

                </div>
                <div className="row"><div className="col-6">
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={this.handleformsubmit}>Submit</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleformclear}>clear</button>

                    </div>
                </div></div>

            </div>
        </div>
        )
    }
}