import styled, { keyframes } from "styled-components"
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Container = styled.header`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.9);
  img {
    border-radius: 31px;
    height: 50px;
    animation: ${rotateAnimation} 5s linear infinite;
  }

  div {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    h2 {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: 16px;
      color: white;
      font-weight: bold;
      svg {
        margin-left: 10px;
      }
    }

    hr {
      height: 20px;
    }
  }
  `
