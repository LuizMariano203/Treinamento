import styled from 'styled-components';

export const Wrapper = styled.div`
    height: auto;
    width: auto;
    gap: 20px;
    display: flex;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;

    justify-content: left;
    background-color: rgba(0, 0, 0, 0.3);
    flex-direction: column;
`;

export const Foto = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer;
`;
export const UserName = styled.span`
    font-size: 15px;
    font-family: Inter;
    color: white;
    cursor: pointer;
`;
export const UserNav = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
`;

export const Text = styled.span`
    font-size: 20px;
    font-family: Inter;
    color: white;
    max-width: 100%;

    margin-left: 30px;
`;
