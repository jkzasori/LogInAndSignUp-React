import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
// import { Control, Form, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
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
			email: '',
			password: ''
		});
		alert("Current State is: "+JSON.stringify(this.state));
	}
	render() {
		return(
			<div className="row row-content">
				<div className="col-12">
					<h3><strong>Log In</strong></h3>
				</div>
				<div className="col-12 col-md-9">
					<Form  onSubmit={this.handleSubmit}>
				        <FormGroup row>
				          <Label for="email" md={2} >Email: </Label>
				          <Col md={10}>
				          	<Input type="email" name="email" id="email" 
				          	placeholder="Email" 
				          	value={this.state.email} 
				          	onChange={this.handleInputchange} />
				          </Col>
				        </FormGroup>
				        {' '}
				        <FormGroup row>
				          <Label for="examplePassword" md={2} >Password: </Label>
				          <Col md={10}>
				           <Input type="password" name="password" id="examplePassword" 
				           placeholder="Password" 
				           value={this.state.password} 
				           onChange={this.handleInputchange} />
				          </Col>
				        </FormGroup>
				        {' '}
				        <FormGroup row>
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
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

export default Login;