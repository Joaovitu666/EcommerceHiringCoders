import styled from "styled-components";

export const HomeContainer = styled.div`
  box-sizing: border-box;
  display: box;
  justify-content: center;
  height: 100vh;
  background: #212121;
  padding: 1rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: cornsilk;
`;

export const Content = styled.div`
  width: 100vw;
  resize: both;
  overflow: auto;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: #fff;
`;
export const InputTexto = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  border-radius: 9px;
  border: 3px solid #f8c300;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: #f8c300;
  color: #ffffff;
  width: 100%;
  text-align: center;
  margin: 1.5rem 0 0;
  padding: 0.8rem 0;
  border-radius: 0.5rem;
  letter-spacing: 0.1rem;
  align-self: center;
  font-size: 1.1rem;
`;
