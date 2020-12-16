import React,{Component} from 'react';
import Cardlist from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{

	constructor(){
		super();
		this.state = {
			robots : [],
			searchfield : ''
		}


	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response)=>{
			return response.json();
		})
		.then((users)=>{
			this.setState({robots:users})
		})
	}

	searchItems = (event)=>{
		this.setState({searchfield:event.target.value})
	}

	render(){
		const filteredrobots = this.state.robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if(!this.state.robots.length){
			return <h1>Loading...</h1>
		}
		else{
			return(
			<div className='tc'>
				<h1 className="f1">ROBOFREINDS</h1>
				<Searchbox searchItems={this.searchItems}/>
				<Scroll>
					<Cardlist robots={filteredrobots}/>
				</Scroll>
			</div>
		);
		}
		
	}
		
	
}

export default App;