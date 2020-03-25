import React from 'react';
import { fetchNews, handleTypingSearchString, showEachNews, toggleBetweenListAndEachNews } from '../actions';
import { connect } from 'react-redux';
import './NewsList.css';

class NewsList extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.props.handleTypingSearchString(e.target.value);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.fetchNews(this.props.searchString);
    }

    handleClick(eachNews){
        this.props.showEachNews(eachNews);
        this.props.toggleBetweenListAndEachNews('eachNews');
    }

    renderList(){
        return this.props.news.map( (eachNews, index) => {
            return (
                <div className="item" key={index} onClick={() => this.handleClick(eachNews)}>
                    <i class="newspaper icon"></i>
                    <div className="content">
                        <a className="header">{eachNews.title}</a>
                    </div>
                </div> 
            )
        });
    }

    render(){
        console.log(this.props.news);
        return (
            <div>
                <div className="ui red grid inverted menu">
                    <div className="item centered row">
                        <h2>Tada News</h2>
                    </div>
                </div>

                <div className="ui grid container">
                    <div className="item centered row">Type in a word to search for news related to it</div>
                </div>

                
                <div className="ui container">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <input value={this.props.searchString} type="text" onChange={this.handleChange}/>
                        </div>
                    </form>
                </div>
                
                <div id="news_list" className="ui container">
                    <div className="ui list">{this.renderList()}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {news: state.news, searchString: state.searchString}
}

export default connect(mapStateToProps, { fetchNews, handleTypingSearchString, showEachNews, toggleBetweenListAndEachNews })(NewsList);