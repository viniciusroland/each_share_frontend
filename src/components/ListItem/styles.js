import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";


export const StyledA = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const introAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const Container = styled.div`
  animation: ${introAnimation} 350ms ease-out;
  animation-fill-mode: backwards;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 70%;
  box-shadow: 1px 1px 2px #888888;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;

  h3 {
    margin-left: 25px;
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.3);
    transition: color 300ms;
  }

  @media (max-width: 800px) {
    width: 55%;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
  }

  @media(max-width: 450px) {
    width: 42%;
    padding: 5px;
    margin-right: 5px;
    margin-left: 5px;
  }
`;
