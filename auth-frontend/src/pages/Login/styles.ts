import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #aaa;
  width: 400px;
  padding: 1rem 2rem;
  background-color: #36393f;
  border: none;
  border-radius: 15px;
`;

export const Header = styled.div`
  font: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: bold;
  padding: 5px 0px;
  margin-bottom: 10px;
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
  width: 100%;
  font-width: 500;
  border-radius: 5px;
  color: white;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.85);
  }
`;
