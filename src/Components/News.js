// Notes:
// constructor : constructor  is initialized when the object of the component is instantiated. 
// props : We can not change the value of props because props are read only.
// state : state is used when the value of variable is not fixed means the value of the variable is changed at run time.
// Note: When you use map to iterate array the you have assign an unique key to every returned element.
// componentDidMount: This method runs after the execution of rendor method.
// defaultProps: The concept of the defaultProps is similer to the default value.
// propTypes: propTypes is used define the type of props.

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'  //Shortcut : impt

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        name: PropTypes.string,     //Shortcut : pts
        pageSize: PropTypes.number, //Shortcut : ptn
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,            
            loading: false
        }
        console.log("In constructor()");
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })
        console.log("In componentDidMount() method");
    }

    handlePreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();        
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    handleNextClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }

    render(){
        return (
            <div className="container my-3">
                {console.log("In render() method")}
                <h1 className="text-center" style={{margin: '30px'}}>NewsQuicker - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://images.moneycontrol.com/static-mcnews/2021/08/Windows-11-770x433.jpg"} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt?element.publishedAt:""} source={element.source.name}/>
                            </div>
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default News