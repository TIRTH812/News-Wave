import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge bg-danger">{this.props.source}</span>
                    </div>
                    <img src={this.props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
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