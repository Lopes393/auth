import { Container, Content } from "./styles";

interface InputProps {
  type: string;
  label?: string;
  placeholder?: string;
  state: any;
  width?: string;
  setState: (elem: string) => void;
}

export function Input({
  type,
  label,
  placeholder,
  state,
  width,
  setState,
}: InputProps) {
  function inputChange(event: any) {
    setState(event.target.value);
  }

  return (
    <Container style={{ width: width ?? "500px" }}>
      <div className="InputForm">
        <label>{label}</label>
        <Content>
          <input
            type={type}
            placeholder={placeholder}
            value={state}
            onChange={inputChange}
          />
        </Content>
      </div>
    </Container>
  );
}
