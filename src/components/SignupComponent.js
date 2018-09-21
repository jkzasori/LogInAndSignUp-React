import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
// import { Control, Form, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			firtsname: '',
			lastname: '',
			Semail: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputchange = this.handleInputchange.bind(this);
	}
	handleInputchange(event){
		const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
	}
	handleSubmit(event){
		event.preventDefault();
		console.log("Current State is: "+JSON.stringify(this.state));
		this.setState({
			firtsname: '',
			lastname: '',
			Semail: '',
			password: ''
		});
		alert("Current State is: "+JSON.stringify(this.state));
	}
	render() {
		return(
			<div className="row row-content">
				<div className="col-12">
					<h3><strong>Sig up</strong></h3>
				</div>
				<div className="col-12 col-md-8 signup-content offset-md-2">
					<Form  onSubmit={this.handleSubmit}>
				        <FormGroup row>
				          <Label for="firtsname" md={2} >Firts name: </Label>
				          <Col md={10}>
				          	<Input type="text" name="firtsname" id="firtsname" 
				          	placeholder="Firts name" 
				          	value={this.state.firtsname} 
				          	onChange={this.handleInputchange} />
				          </Col>
				        </FormGroup>
				        <FormGroup row>
				          <Label for="lastname" md={2} >Last name: </Label>
				          <Col md={10}>
				          	<Input type="text" name="lastname" id="lastname" 
				          	placeholder="Last name" 
				          	value={this.state.lastname} 
				          	onChange={this.handleInputchange} />
				          </Col>
				        </FormGroup>
				        <FormGroup row>
				          <Label for="Semail" md={2} >Email: </Label>
				          <Col md={10}>
				          	<Input type="Semail" name="Semail" id="Semail" 
				          	placeholder="Email" 
				          	value={this.state.Semail} 
				          	onChange={this.handleInputchange} />
				          </Col>
				        </FormGroup>
				        {' '}
				        <FormGroup row>
				          <Label for="Spassword" md={2} >Password: </Label>
				          <Col md={10}>
				           <Input type="password" name="password" id="Spassword" 
				           placeholder="Password" 
				           value={this.state.password} 
				           onChange={this.handleInputchange} />
				          </Col>
				        </FormGroup>
				        {' '}
				        <FormGroup row>
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" className="btn " color="primary">
                                    Log In
                                    </Button>
                                </Col>
                            </FormGroup>
				        
				      </Form>
				</div>
			</div>
			)
	}
}

export default Signup;