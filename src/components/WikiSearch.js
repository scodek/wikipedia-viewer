import React from 'react';
import './main-app.css';

class WikiSearch extends React.Component{
    state = {
        searchTerm : ''
    };

    onFormSubmit = (e) => {
        console.log('submitted '+this.state.searchTerm);
        this.props.returnSearchTerm(this.state.searchTerm);
        e.preventDefault();
    }
    render(){
        return(
            <form className="wiki-form" onSubmit={this.onFormSubmit}>
            <input  id="wiki-input"
                type="text" placeholder="Searching For"
                value={this.state.searchTerm} 
                onChange={(event) => this.setState({searchTerm:event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase()})}
            />
            <input id="go-btn" className="wiki-btn" type="submit" value="Go" onClick={this.onFormSubmit}/>
        {/* <input id="random-search" className="wiki-btn" type="submit" value="Random Search" onClick={window.open("https://en.wikipedia.org/wiki/Special:Random","_blank")}/>*/}
            </form>
        );
    }
}

export default WikiSearch;