import React from 'react';
import './App.css';
import Navbar from './components/layouts/NavBar';
import Fetch from './components/layouts/fetch/Fetch';
import axios from 'axios';

class App extends React.Component{

  state = {
    users:[],
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true });

       console.log("------");

       // Get call to the Fetch API
       const res1 = await axios.get('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json');
       const fetchList = res1.data
      
       console.log("fetchList : ", fetchList);

       let fetFilter = [];
       
       // Looping through each Object to filterout the "" & nul values.
       fetchList.forEach(function (value) {
         if(value.name !== "" && value.name !== null){
          fetFilter.push(value);
         }
       });

       // Sorting the filtered Object Array.  
        fetFilter.sort(function(a, b){
          if (a.listId > b.listId) return 1;
          if (a.listId < b.listId) return -1;

          if (a.id > b.id) return 1;
        	if (a.id < b.id) return -1;
         });

       console.log("fetFilter after sorting : ", fetFilter);
       console.log("fetFilter.length : ", fetFilter.length);
       this.setState({ users: fetFilter, loading: false });
       
  }

  render(){     
    return (
      <div className="App">
        <Navbar>  
        </Navbar>  
        <div className="container" > 
           <Fetch loading={this.state.loading} users={this.state.users}/>
        </div>

      </div>
    );
  }
}

export default App;
