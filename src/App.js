import React from "react";

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Futoshi", age: 31 },
    { name: "No name" },
  ];

  return (
    <div className="App">
      {profiles.map((profiles, index) => {
        return <User name={profiles.name} age={profiles.age} key={index} />;
      })}
      <User name={"Futoshi"} age={31} />
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
