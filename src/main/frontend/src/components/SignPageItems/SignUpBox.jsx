import React from 'react';
import InputBox from "./InputBox";
import SignBoxWrapper from "./SignBoxWrapper";
import SignBtn from "./SignBtn";

const SignUpBox = () => {
    return (
        <SignBoxWrapper>
            <h1 style={{marginTop: "0"}}>회원가입</h1>
            <InputBox message={"이메일을 입력해주세요."}/>
            <InputBox message={"패스워드를 입력해주세요."}/>
            <InputBox message={"패스워드를 다시 한번 입력해주세요."}/>
            <SignBtn to={"/"}>회원가입</SignBtn>
        </SignBoxWrapper>
    );
};

export default SignUpBox;