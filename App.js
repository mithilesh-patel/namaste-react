import React from "react";
import ReactDOM from "react-dom/client";

const Title =()=> (<h1 id="title">This is Title1 </h1>);

const Title2 = <h1 id="title2">This is Title2</h1>;

const name= "Mithilesh";

const Header = () => {
  return (
    <div>
      <h1>This is the header</h1>
      <Title/>
      {Title()}
      {console.log("We can write any js code inside curly bracket inside JSX")}
      {console.warn("We can write any js code inside curly bracket inside JSX")}
      <h1>{20+45}</h1>
      <h1>{name}</h1>
      {Title2}
      <p>This is paragraph</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<Header />);
