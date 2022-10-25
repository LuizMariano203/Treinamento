import * as S from './styles';

export type NewsComponent = {
    title: string;
    img: string;
};

const NewsComponent: React.FC<NewsComponent> = ({ title, img }) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Icon src={img} />
    </S.Wrapper>
);

export default NewsComponent;
