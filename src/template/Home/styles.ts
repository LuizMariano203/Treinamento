import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: fit-content;
    background-image: url('assets/background.png');
    background-size: cover;

    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const NewsBar = styled.div`
    width: 15%;
    height: fit-content;
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 20px;
    gap: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Wrapper = styled.div`
    width: 50%;
    height: 100vh;
    margin-right: 20px;
    margin-left: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
`;
export const Menu = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 20px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
`;

export const NavBar = styled.div`
    width: auto;
    height: auto;
    display: flex;
    border-radius: 20px;
    padding: 10px;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.3);
    justify-content: space-evenly;
    margin-top: 10px;
    align-items: center;
`;
export const Publish = styled.div`
    width: auto;
    height: auto;
    display: flex;
    border-radius: 20px;

    padding: 10px;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.3);
    justify-content: space-evenly;
    margin: 20px;
    align-items: center;
`;
export const Posts = styled.div`
    width: 100%;
    height: auto;
`;
export const Foto = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
export const Pesquisa = styled.div`
    width: 300px;
    height: auto;
    border-radius: 20px;
    border-color: white;
    outline-color: white;
    padding: 5px;

    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    justify-content: left;
    gap: 20px;
    border: solid 1px;
`;
export const IconMenu = styled.img`
    width: 10px;
    height: 10px;
    cursor: pointer;
`;
export const Publica = styled.input`
    width: 400px;
    height: auto;
    border-radius: 20px;

    padding: 5px;

    align-items: center;
    border: solid 1px;
`;

export const PublicaButton = styled.button`
    width: auto;
    height: auto;
    border-radius: 20px;
    border-color: white;
    outline-color: white;
    padding: 10px;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    color: black;
    align-items: center;
    justify-content: space-evenly;
    border: solid 1px;
`;

export const Pesquisaimg = styled.img``;
