import * as S from './styles';

export type Post = {
    user: string;
    userPhoto: string;

    text: string;
};

const Post: React.FC<Post> = ({ userPhoto, text, user }) => (
    <S.Wrapper>
        <S.UserNav>
            <S.Foto src={userPhoto} />
            <S.UserName>{user}</S.UserName>
        </S.UserNav>

        <S.Text>{text}</S.Text>
    </S.Wrapper>
);

export default Post;
