import React from 'react';
import { toggleBetweenListAndEachNews } from '../actions';
import { connect } from 'react-redux';
import './EachNews.css';


const EachNews = (props) => {
    return (
        <div style={{height:'100%'}}>
            <div className="ui red seconday borderless inverted menu">
                <div className="item">
                    <button 
                        className="back_button ui button"
                        onClick={() => props.toggleBetweenListAndEachNews('list')}
                    >Back to List</button>
                </div>

                <div className="right menu">
                    <h3 className="item">TADA NEWS</h3>
                </div>
            </div>
           
            <iframe
                src={props.eachNews.url}
                className="each-news-iframe"
                style={{border:0, width:'100%', height: '100%'}}
            /> 
        </div>
    )
}

const mapStateToProps = state => {
    return {eachNews: state.eachNews};
}

export default connect(mapStateToProps, { toggleBetweenListAndEachNews })(EachNews);