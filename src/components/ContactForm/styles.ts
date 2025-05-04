import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const SuccessMessage = styled.div<{ success?: boolean; error?: boolean }>`
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.success ? "green" : props.error ? "red" : "transparent"};
  color: white;
  text-align: center;
  font-weight: bold;
  display: ${(props) => (props.success || props.error ? "block" : "none")};
`;



export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
