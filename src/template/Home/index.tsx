import PostComponent from 'components/NewsComponent';
import { useState } from 'react';
import Menu from 'components/MenuComponents';

import Post from 'components/Post';
import * as S from './styles';

const HomeTemplate = () => {
    interface InterfacePosts {
        text: string;
        user: string;
        userPhoto: string;
    }

    const [postsArray, setPostsArray] = useState<InterfacePosts[]>([]);

    const [name, setName] = useState();
    const [valueInputTexto, setInputTexto] = useState();
    function handleClick() {
        setName(valueInputTexto);
        setPostsArray([
            {
                text: name,
                user: 'Yasmin Assef',
                userPhoto: '/assets/Foto.png'
            },
            ...postsArray
        ]);
    }

    return (
        <S.Background>
            <S.NewsBar>
                <PostComponent title="Inglaterra" img="/assets/Noticia2.png" />
                <PostComponent title="Economia" img="/assets/Noticia1.png" />
                <PostComponent
                    title="Política Brasil"
                    img="/assets/Noticia3.png"
                />
            </S.NewsBar>
            <S.Wrapper>
                <S.NavBar>
                    <S.Foto src="/assets/Foto.png" />
                    <S.Pesquisa>
                        <S.Pesquisaimg src="/assets/Lupa.png" />
                        <h2>Nome, piu, piuwer</h2>
                    </S.Pesquisa>
                    <S.IconMenu src="/assets/Menu.png" />
                </S.NavBar>

                <S.Publish>
                    <S.Foto src="/assets/Foto.png" />
                    <S.Publica
                        onChange={(Text) => setInputTexto(Text.target.value)}
                    />
                    <S.PublicaButton onClick={handleClick}>
                        Enviar!
                    </S.PublicaButton>
                </S.Publish>
                <S.Posts>
                    {postsArray.map((post) => (
                        <Post
                            text={post.text}
                            user="Yasmin Assef"
                            userPhoto="/assets/Foto.png"
                        />
                    ))}
                </S.Posts>
            </S.Wrapper>
            <S.Menu>
                <Menu img="/assets/Grupos.png" title="Grupos" />
                <Menu img="/assets/Biblioteca.png" title="Biblioteca" />
                <Menu img="/assets/Jogos.png" title="Jogos" />
                <Menu img="/assets/Eventos.png" title="Eventos" />
                <Menu img="/assets/settings.png" title="Configurações" />
            </S.Menu>
        </S.Background>
    );
};
export default HomeTemplate;
