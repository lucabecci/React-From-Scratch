import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const App = () => {
    console.log('working')
    return(
        <>
            <Home/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));