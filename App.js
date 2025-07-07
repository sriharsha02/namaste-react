const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "Namaste React"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React2"),
    React.createElement("h2", {}, "Namaste React2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
