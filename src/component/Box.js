import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    //카드가 computer 카드인가? && 비긴건 아닌가? && 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  return (
    <div>
      <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img className="item-img" src={props.item && props.item.img} />
        {/* item은 유저가 선택 전엔 null이라서, 컴퓨터가 찾을 수 없어서 && 조건식으로 써줘야 에러가 안남
        props.item에 값이 있을 때만 props.item.img를 보여준다. 삼항연산자도 가능 | 참고 문서: https://ko.legacy.reactjs.org/docs/conditional-rendering.html */}
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default Box;
