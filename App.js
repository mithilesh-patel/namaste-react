import React from 'react';
import ReactDOM from 'react-dom';



const heading= React.createElement("h1", {id:'heading1'}, "Heading 1");
const heading2= React.createElement("h2", {}, "Heading 2");

const container=React.createElement('div',{id:'container'}, [heading, heading2])


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(container);