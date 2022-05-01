import { createContext } from "react";
const ColorContext = createContext({ color: "black" });
//context를 만들 때는 createContent 함수를 사용한다.
//파라미터에 해당 Context의 기본 상태를 지정함

export default ColorContext;
