// Notes:
// constructor : constructor  is initialized when the object of the component is instantiated. 
// props : We can not change the value of props because props are read only.
// state : state is used when the value of variable is not fixed means the value of the variable is changed at run time.
// Note: When you use map to iterate array the you have assign an unique key to every returned element.
// componentDidMount: This method runs after the execution of rendor method.

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=82dff8e01a954fc388f6a74ead7f25a5";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }

    render(){
        return (
            <div className="container my-3">
                <h1>NewsQuicker - Top Headlines</h1>
                <div className="row">
                     
                    {this.state.articles.map((element)=>{
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://images.moneycontrol.com/static-mcnews/2021/08/Windows-11-770x433.jpg"} newsUrl={element.url}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}
export default News