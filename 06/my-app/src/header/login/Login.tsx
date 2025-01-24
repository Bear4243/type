import React from "react";
import "./login.css";
//'JSX' 네임스페이스를 찾을 수 없습니다. 흠 도대체 무슨 오류야
export function Login(): React.ReactElement {
  return (
    <div id="login">
      <button className="loginButton">로그인</button>
      <img className="loginImg" src="/img/img_login.png" alt="" />
    </div>
  );
}
