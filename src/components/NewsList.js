import React from 'react';
import { fetchNews, handleTypingSearchString } from '../actions';
import { connect } from 'react-redux';
import './NewsList.css';

class NewsList extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.props.handleTypingSearchString(e.target.value);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.fetchNews(this.props.searchString);
    }



    renderList(){
        return this.props.news.map( (eachNews, index) => {
            const image = () => {
                if(eachNews.urlToImage !== null){
                    return <img className="ui fluid image" src={eachNews.urlToImage}/>
                } else {
                    return <img src="https://img.icons8.com/ultraviolet/80/000000/no-image.png"/>
                }
            }
            return (
                <a className="ui grid anchor segment" key={index} href={eachNews.url} target="_blank" rel="noopener noreferrer">
                    <div className="four wide column">{image()}</div>

                    <div className="twelve wide column">
                        <h3 className="ui header">{eachNews.title}</h3>
                        <div className="ui basic segment">
                            <div>{eachNews.description}</div>
                        </div>
                    </div>
                </a> 
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

export default connect(mapStateToProps, { fetchNews, handleTypingSearchString })(NewsList);