import styled from "styled-components";

const Button = styled.button`
  justify-content: center;

  background-color: grey;

  border: none;

  color: black;

  padding: 15px 32px;

  text-align: center;

  text-decoration: none;

  display: inline-block;

  font-size: 16px;

  border-radius: 12px;
   
   &:hover{
    color:red;
    font-weight: bold;
    cursor: pointer;
   }
`;

export default Button;
