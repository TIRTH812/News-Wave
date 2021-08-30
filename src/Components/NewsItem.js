import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        return (
            <div className="my-3">
                <div className="card">
                    <img src={this.props.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                            {this.props.source}
                        </span>
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text"><small className="text-muted">By {this.props.author} on {new Date(this.props.date).toGMTString()}</small></p>  
                        <a href={this.props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                    </div>
            </div>
        )
    }
}

export default NewsItem