import React from 'react';
import WikiSearch from './WikiSearch';
import ShowSearchResult from './ShowSearchResult';
import axios from 'axios';


class App extends React.Component{

    state = {
        wikidata : {}
    };
   
    getSearchTerm = (term) => {
        console.log("APP TERNM IS " + term);
        fetch(
            `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${term}`
              
        ).then(
            (response) => {
                if(response.ok){
                    return response;
                }else{
                    console.log('no response');
                }
            }
        ).then(data => data.json()).then(data => {
            console.log(data)
            this.setState({wikidata: data});
        });
    }
    render(){
        return (
        <div className="container">
            <div id="header">
                <h1>Wikipedia Viewer</h1>
            </div>
            <div id="main-content">
            <WikiSearch returnSearchTerm={this.getSearchTerm}/>
            <ShowSearchResult wikiData={this.state.wikidata}/>
            <div id="footer">
    <p>Made by <a href="">Sharmin Khaleque</a>. Background image <a href='https://cdn.wallpapersafari.com/84/35/8uIWXe.png'>taken from WallPaperSafari</a>.</p>     
  </div>
            </div>
            
        </div>
        );
    }
}



export default App;