import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  input {
    width: 100%;
  }
  input::placeholder {
    font-size: 10px;
    opacity: 0.3;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 14px;
  width: 500px;

  .InputForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      margin: 6px 2px;
    }
  }
`;
