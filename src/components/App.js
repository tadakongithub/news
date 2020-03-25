import React from 'react';
import NewsList from './NewsList';
import EachNews from './EachNews';
import { connect } from 'react-redux';

const App = (props) => {
    if(props.list_or_eachNews === 'list'){
        return(
            <div>
                <NewsList />
            </div>
        )
    } else if (props.list_or_eachNews === 'eachNews'){
        return(
            <div style={{height: '100%'}}>
                <EachNews />
            </div>
        )
    } else {
        return 'an error has occured';
    }
}

const mapStateToProps = state => {
    return {list_or_eachNews: state.list_or_eachNews};
}

export default connect(mapStateToProps, {})(App);