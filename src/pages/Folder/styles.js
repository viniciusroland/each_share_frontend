import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  /* border: 1px solid black; */

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

export const StudentIcon = styled.img`
  height: 250px;
  margin: 10px;

  @media (max-width: 600px) {
    height: 200px;
  }
`

export const CoursesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 100%;
  width: 800px;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  h4 {
    font-size: 14px;
    font-weight: bold;
    margin: 25px;
    font-style: italic;
  }

  svg {
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
    width: 360px;
  }
`

export const Button = styled.button`
  border-radius: 5px;
  height: 40px;
  width: 200px;
  background-color: black;
  color: white;
  font-weight: bold;
  box-shadow: 10px 10px 10px #ddd;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 300ms;
  }
`

export const ButtonContainer = styled.div`
  margin-bottom: 25px;
  margin-top: 25px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
  }
`
export const Input = styled.input`
  display: ${props => props.type === "file" && 'none'};
  height: 60px;
  width: 80%;
`

export const FormContainer = styled.form`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    width: 200px;
    /* border: 1px solid black; */
    border-style: dashed;
  }
`
