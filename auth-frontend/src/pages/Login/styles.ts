import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100vh;
  background-color: var(--background);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #aaa;
  width: 25rem;
  padding: 1rem 2rem;
  background-color: var(--shape);
  border: none;
  border-radius: 0.938rem;
  box-shadow: 0 0 1em #aaa;

  div.separete {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    hr {
      width: 40%;
      margin: 0 5px;
    }
  }

  .login-google-button {
    border-radius: 0.938rem !important;
    width: 75%;
    justify-content: center;
    margin-top: 0.938rem;
  }
`;

export const Header = styled.div`
  font: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 5px 0px;
  margin-bottom: 0.625rem;
  font-size: 2rem;
  color: var(--text-tile);
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Logar = styled.button`
  background-color: #2f3136;
  border: none;
  padding: 1rem;
  width: 75%;
  font-width: 500;
  border-radius: 0.938rem;
  color: white;

  margin: 0.938rem 0;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.85);
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
  font-weight: 200;
  word-spacing: -1px;

  a {
  }
`;
