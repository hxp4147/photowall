import React,{ Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import {Route, Link} from 'react-router-dom';
import {removePost} from '../Redux/actions';

class Main extends Component{
    constructor(){
        super();
    }

    state = {loading: true};

    componentDidMount(){
        this.props.startLoadingPost().then(()=>{
            this.setState({loading:false});
        });
        this.props.startLoadingComments();
    }

    render(){
        console.log(this.props);        
        return (
        <div>
            <h1>
                <Link to='/'>Photowall</Link>
            </h1>
            {/* VV use exact so paths do not overlap */}
            <Route exact path="/"render={()=>(
                <div>
                    <Photowall {...this.props}/>            
                </div>
            )}/>
            {/* render for multiple components and component for single components */}
            {/* <Route path="/AddPhoto" component ={AddPhoto}/> */}
            <Route path="/AddPhoto"render={({history})=>(
                    <AddPhoto {...this.props}/>
            )}/>

            <Route path='/single/:id' render={(params)=>(
                <Single loading={this.state.loading} {...this.props} {...params}/>
            )}/>

        </div>)
    }
}


export default Main