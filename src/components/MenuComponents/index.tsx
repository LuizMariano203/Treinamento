import * as S from './styles';

export type MenuProps = {
    title: string;
    img: string;
};

const Menu: React.FC<MenuProps> = ({ title, img }) => (
    <S.Wrapper>
        <S.Icon src={img} />
        <S.Title>{title}</S.Title>
    </S.Wrapper>
);

export default Menu;
