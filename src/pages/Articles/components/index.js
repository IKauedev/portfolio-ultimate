import styled from "styled-components";

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
    color:${({ theme }) => theme.text_black}
`;