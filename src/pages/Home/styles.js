import styled from 'styled-components';

export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  h2 {
    text-align: center;
    font-size: 22px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  h3 {
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    font-size: 16px;
  }

  @media (max-width: 530px) {
    h1 {
      text-align: center;
      margin-left: 30px;
      margin-right: 30px;
    }
    .welcome2 {
      display: none;
    }
     
    .welcome3 {
      display: none;
    }
  }
`
export const IllustrationOne = styled.img`
  height: 250px;
  margin: 25px;
`

export const IllustrationTwo = styled.img`
  height: 300px;
  margin: 20px;
`

export const ActionIcon = styled.img`
  height: 160px;
`
export const ActionsList = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 700px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      margin-top: 15px;
    }
  } 
  @media (max-width: 640px) {
    flex-direction: column;

    h3 {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    svg {
      height: 40px;
      width: 40px
    }

  }
`
export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid black; */
  height: 800px;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const CoursesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 800px;

  @media (max-width: 550px) {
    flex-direction: column-reverse;
  }
`;
