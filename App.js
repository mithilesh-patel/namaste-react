import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div>
    <h3>Header </h3>
  </div>
);

const Footer = () => (
  <div>
    <h3>Footer</h3>
  </div>
);

const Content =()=> (
    <>
    <h1>{34+54}</h1>
      <Header />
      <h1>Bangaluru</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eaque
        laborum totam dolores tenetur obcaecati quidem praesentium. Nihil
        maiores minima reiciendis incidunt? Cupiditate harum, reprehenderit eos
        quos modi minus odio!
      </p>
      <Footer />
    </>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Content />);
