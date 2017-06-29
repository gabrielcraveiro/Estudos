import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Character name
var Name = React.createClass({
	render: function(){
		return(
			<input type="text" onChange={this.props.onChange} maxLength="20" placeholder="some name" />
		)
	}
});

// Character Last Name
var LastName = React.createClass({
	render: function(){
		return(
			<input type="text" onChange={this.props.onChange} maxLength="60" placeholder="some lastname" />
		)
	}
});

// Character NickName
var NickName = React.createClass({
	render: function(){
		return(
			<input type="text" onChange={this.props.onChange} maxLength="20" placeholder="some nickname" />
		)
	}
});

// Character Age
var Age = React.createClass({
	render: function(){
		return(
			<input type="number" onChange={this.props.onChange} min="16" max="60" placeholder="16" />
		)
	}
});

// Characer Height
var Height = React.createClass({
	render: function(){
		return(
			<input type="number" onChange={this.props.onChange} min="100" max="230" placeholder="100" />
		)
	}
});

// Character Weight
var Weight = React.createClass({
	render: function(){
		return(
			<input type="number" onChange={this.props.onChange} min="40" max="300" placeholder="40" />
		)
	}
});

// User options
var Options = React.createClass({
	render: function(){
		return (
			<div className="col-md-6">
				Name: <Name onChange={this.props.updateName} /> <br/>
				Last Name: <LastName onChange={this.props.updateLastName} /> <br/>
				Nickname: <LastName onChange={this.props.updateNickname} /> <br/>
				age <span className="limits">16-60</span>: <Age onChange={this.props.updateAge} /> <br/>
				height <span className="limits">100-230</span>: <Height onChange={this.props.updateHeight} /> <br/>
				weight <span className="limits">40-300</span>: <Weight onChange={this.props.updateHeight} /> <br/>
			</div>
		)
	}
});

// The history
var CharacterHistory = React.createClass({
	getInitialState: function(){
		return{
			age: '',
			height: '',
			weight: '',
			age: ''
		}
	},
	render: function(){

		if(parseFloat(this.props.age) < 20){
			this.state.age = 'teen'
		}
		else if(parseFloat(this.props.age) < 25){
			this.state.age = 'young';
		}
		else if(parseFloat(this.props.age) < 50){
			this.state.age = 'adult'
		}
		else{
			this.state.age = 'old'
		}
		if(parseFloat(this.props.height) < 160){
			this.state.height = 'small'
		}
		else if(parseFloat(this.props.height) < 185){
			this.state.height = 'medium'
		}
		else{
			this.state.height = 'tall'
		}
		if(parseInt(this.props.age) < 20){
			this.state.age = 'just enjoying his teenage'
		}
		else if(parseInt(this.props.age) < 25){
			this.state.age = 'trying to grow on the market'
		}
		else if(parseInt(this.props.age) < 50){
			this.state.age = 'adult and trying as hard as he can to keep a good life with his family'
		}
		else{
			this.state.age = 'at old age and spending his money just like he wants to'
		}
		return(
			<div className="col-md-6">
				<span className="char">{this.props.name}</span> <span className="char">{this.props.lastName}</span> also known 
				as <span className="char">{this.props.nickname}</span> is <span className="char">{this.props.age}</span> old 
				with height: <span className="char">{this.props.height}</span>cm, <span className="char">{this.props.nickname} </span> 
				his size is considered {this.state.height} and he is {this.state.age}
			</div>
		)
	}

});

// App
var App = React.createClass({	
	getInitialState: function(){
		return{
			name: 'name',
			lastName: 'lastname',
			nickname: 'NickName',
			age: '16',
			height: '100',
			weight: '40',
		}
	},
	render: function(){
		return (
			<div className="row">
				<Options updateName={this.updateName} updateLastName={this.updateLastName}
				updateNickname={this.updateNickname} updateAge={this.updateAge} updateHeight={this.updateHeight} 
				updateWeight={this.updateWeight} />
				<CharacterHistory name={this.state.name} lastName={this.state.lastName} nickname={this.state.nickname} age={this.state.age} 
				height={this.state.height} weight={this.state.weight} />
			</div>
		)
	},
	updateName: function(evt){
		this.setState({
			name: evt.target.value
		});
	},
	updateLastName: function(evt){
		this.setState({
			lastName: evt.target.value
		});
	},
	updateNickname: function(evt){
		this.setState({
			nickname: evt.target.value
		});
	},
	updateAge: function(evt){
		this.setState({
			age: evt.target.value
		});
	},
	updateHeight: function(evt){
		this.setState({
			height: evt.target.value
		});
	},
	updateWeight: function(evt){
		this.setState({
			weigth: evt.target.value
		});
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('content')
);