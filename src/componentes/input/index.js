import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  background-color: transparent;
  padding: 20px 140px;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #000000ff;
  }

  &::placeholder {
    color: #fff;
    font-size: 16px;
    
  }
`;

export default Input;