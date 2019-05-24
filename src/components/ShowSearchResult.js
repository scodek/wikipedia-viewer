import React from 'react';


class ShowSearchResult extends React.Component{

    render(){
      
        let divList = [];
        const dataObject = this.props.wikiData;
        if(!(Object.keys(dataObject).length === 0 && dataObject.constructor === Object)){
         // console.log('this is called : ' + JSON.stringify(dataObject));
       for(let i=0;i<10;i++){
         if(dataObject[1][i] && dataObject[2][i] && dataObject[3][i]){
        divList[i] = (<div key={i} className="result-div"><a target="_blank" href={dataObject[3][i]}>
            <h2>{dataObject[1][i]}</h2>
            <p>{dataObject[2][i]}</p>
          </a></div>);

         //console.log('hello' + dataObject[2][i]);
        // divList[i] = <div>{dataObject[2][i]}</div>;
         }

       }
        }
        return <div id="wiki-results">{divList}</div>;

       // return <p/>;
        
    }
}

export default ShowSearchResult;