import styled from "styled-components";

export const ButtonAccept = styled.button`
    width: 100%;
    max-width: 200px;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;

    @media (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

export const ButtonReject = styled.button`
    width: 100%;
    max-width: 200px;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;

    @media (max-width: 600px) {
        margin-top: 10px;
    }
`;
