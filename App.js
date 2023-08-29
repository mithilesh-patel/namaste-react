import React from 'react';
import ReactDOM from 'react-dom/client';

React.createElement("h2", {}, "Heading 2")


const container=React.createElement('div',{id:'container'},
 [ React.createElement("h1", {id:'heading1'}, "Heading 1 from parcel"),
 React.createElement("h2", {}, [
    React.createElement("h4", {id:'heading4'}, "This is heading4"),
    React.createElement("h4", {id:'heading4'}, "This is heading4")

    ])
 ])


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(container);