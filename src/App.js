// import "./App.css";
import Container from "./Container";
import Counter from "./Counter";
import MyFooter from "./MyFooter";
// header export
import MyHeader from "./MyHeader";

const App = () => {
  // value name === JSX
  // let nm = "Lucas";
  // style obj
  // const style = {
  //   App: {
  //     backgroundColor: "#000",
  //   },
  //   h2: {
  //     color: "red",
  //   },
  //   bold_text: {
  //     color: "greenyellow",
  //   },
  // };
  // value number
  const num = 4;
  // props
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 6,
    e: 9,
  };
  return (
    <Container>
      <div>
        <MyHeader />
        {/* <h2 style={style.h2}>Hello, {nm}(App)</h2>
      <b style={style.bold_text}> */}
        {/* 조건부 랜더링(삼항식) */}
        {/* {num} is : {num % 3 !== 0 ? "Odd" : "Even"}
      </b> */}
        <Counter {...counterProps} />
        <MyFooter />
      </div>
    </Container>
  );
};

export default App;
