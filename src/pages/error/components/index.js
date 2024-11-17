import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_black};
`;

export const Button = styled.button`
  width: 15%;
  padding: 6px;
  background: #000;
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  margin-top: 10px;
`;

export const NotFouldText = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 65px;
  font-weight: 700;
`;
