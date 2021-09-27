import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { seleteCar } from '../features/car/carSlice';

function Header() {
    const [menuOpen, setMenuOpne] = React.useState(false);
    const cars = useSelector(seleteCar);

    console.log(cars);

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars &&
                    cars.map((car, index) => (
                        <a href="/f" key={index}>
                            {car}
                        </a>
                    ))}
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu onClick={() => setMenuOpne(true)} />
            </RightMenu>
            <BurgerNav show={menuOpen}>
                <CloseBtnWrap>
                    <CustomCloseBtn onClick={() => setMenuOpne(false)} />
                </CloseBtnWrap>
                {cars &&
                    cars.map((car, index) => (
                        <li key={index}>
                            <a href="/model-s">{car}</a>
                        </li>
                    ))}
                <li>
                    <a href="/">Trade-in</a>
                </li>
                <li>
                    <a href="/">CyberTruck</a>
                </li>
                <li>
                    <a href="/">Existing inventory</a>
                </li>
                <li>
                    <a href="/">Used inventory</a>
                </li>
                <li>
                    <a href="/">Solar Panels</a>
                </li>
                <li>
                    <a href="/">Solar Roofs</a>
                </li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.header`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        text-transform: uppercase;
        font-weight: 600;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        text-transform: uppercase;
        font-weight: 600;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.ul`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
    opacity: 0.9;
    z-index: 1000;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    transform: ${(props) => (props.show ? 'translate(0)' : 'translate(100%)')};
    transition: transform 0.3s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
        }
    }
`;

const CustomCloseBtn = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseBtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;
