import React from "react";
import styled from "styled-components";

const Login = () => {
    return <Background>
        <Aside>
            <Tabs>
                <Tab>
                    <img src="./search.svg"/>
                    검색
                </Tab>
                <Tab>
                    <img src="./pencil.svg"/>
                    글작성
                </Tab>
                <Tab>
                    <img src="./bookmark.svg"/>
                    저장
                </Tab>
            </Tabs>
            <Tab>
                <img src="./profile.svg"/>
                프로필
            </Tab>
        </Aside>
        <Container>
            <Title>회원가입</Title>
            
            <Inputs>
            
            <InputContainer>
                <InputBox>
                <InputName>아이디</InputName>
                <Input placeholder="아이디 제한"/>
                </InputBox>
                <Button>중복확인</Button>
            </InputContainer>
            <InputContainer>
                <InputBox>
                <InputName>비밀번호</InputName>
                <Input placeholder="영,숫자 8~16이내"/>
                </InputBox>
            </InputContainer>
            <InputContainer>
                <InputBox>
                <InputName>비밀번호 확인</InputName>
                <Input placeholder="한번 더 입력해주세요"/>
                </InputBox>
            </InputContainer>
            <InputContainer>
                <InputBox>
                <InputName>이메일</InputName>
                <Input placeholder="asdf@naver.com"/>
                </InputBox>
            </InputContainer>
            </Inputs>
            <SignupButton>회원가입</SignupButton>
            
        </Container>
    </Background>
}

export default Login;

const SignupButton = styled.button`
display: flex;
width: 339px;
height: 48px;
padding: 9px 32px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 7px;
background: var(--base-2, #57CADD);
color: var(--fff, #FFF);
text-align: center;
font-family: SUITE Variable;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
border: none;
`

const Inputs = styled.div`
display: flex;
width: 339px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 12px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    display: flex;
justify-content: flex-end;
align-items: center;
gap: 24px;
align-self: stretch;
width: 337px;
`;

const InputBox = styled.div`
display: flex;
height: 87px;
flex-direction: column;
align-items: flex-start;
gap: 3px;
flex: 1 0 0;
`;

const InputName = styled.span`
color: #000;
text-align: center;
font-family: SUITE Variable;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const Input = styled.input`
box-sizing: border-box;
display: flex;
height: 52px;
min-width: 195px;
padding: 16px 8px 16px 14px;
align-items: center;
gap: 10px;
flex-shrink: 0;
align-self: stretch;
`;

const Button = styled.button`
display: flex;
width: 73px;
height: 40px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 7px;
color: #FFF;
text-align: center;
font-family: SUITE Variable;
font-size: 12px;
font-style: normal;
font-weight: 700;
background: var(--base-2, #57CADD);
border: none;
`;

const Tabs = styled.div`
    display:flex;
    flex-direction: column;
`;

const Background = styled.div`
    width: 1980px;
    height: 1080px;
    display: flex;
    gap: 654px;
    display: inline-flex;
padding-right: 0px;
align-items: center;
gap: 654px;
`

const Aside = styled.div`
    width: 74px;
    height: 100vh;
    border-right: 2.2px solid #E0E0E0;
    background: #FFF;
`
const Tab = styled.div`
display: flex;
width: 74px;
height: 74px;
padding: 4px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4px;
    & > img {
        width: 24px;
        height: 24px;
    }

    &:nth-last-child(1) {
        margin-bottom:784px; 
    }
`

const Container = styled.div`
    display: flex;
    padding: 72px 100px;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    border: 1px solid #ADDFE0;
    width: 339px;
height: 512px;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.span`
color: #000;
font-size: 32px;
font-weight: 700;
`