// let h1=document.createElement("h1");
// h1.innerText="hello react";
// document.body.appendChild(h1)



// const head = React.createElement("h1", {}, "Simple Portfolio");
// const rootEle = document.getElementById("root");
// ReactDOM.createRoot(rootEle).render(head);


const container = React.createElement(
    "div",
    { id: "container" },[
    React.createElement("h1", {}, "First Heading"),
    React.createElement("h2",{},"second heading")
]);
const rootEle = document.getElementById("root");
ReactDOM.createRoot(rootEle).render(container);