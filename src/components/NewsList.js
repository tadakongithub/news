import React from 'react';
import { fetchNews } from '../actions';
import { connect } from 'react-redux';

class NewsList extends React.Component{

    componentDidMount(){
        this.props.fetchNews();
    }

    renderList(){
        return this.props.news.map( (eachNews, index) => {
            return (
                <div key={index}>
                    <h3>{eachNews.title}</h3>
                    <p>{eachNews.description}</p>
                </div>
            )
        });
    }

    render(){
        console.log(this.props.news);
        return (
            <div>{this.renderList()}</div>
        )
    }
}

const mapPropsToState = state => {
    return {news: state.news}
}

export default connect(mapPropsToState, { fetchNews })(NewsList);