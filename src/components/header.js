import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const cars = useSelector(selectCars);
  const toggleNavOpen = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };
  const carsNav = cars.map((car, index) => {
    return (
      <a href="#" key={index}>
        {car}
      </a>
    );
  });
  return (
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg" />
        </a>
        <Menu>{carsNav}</Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={toggleNavOpen} />
        </RightMenu>
        <BurgerNav show={navOpen}>
          <CloseWrap>
            <MenuCloseIcon onClick={toggleNavOpen} />
          </CloseWrap>
          <li>
            <a>Model S</a>
          </li>
          <li>
            <a>Model 3</a>
          </li>
          <li>
            <a>Model X</a>
          </li>
          <li>
            <a>Model Y</a>
          </li>
          <li>
            <a>Existing Inventory</a>
          </li>
          <li>
            <a>Used Inventory</a>
          </li>
          <li>
            <a>Trade-in</a>
          </li>
          <li>
            <a>Cybertruck</a>
          </li>
          <li>
            <a>Roadster</a>
          </li>
          <li>
            <a>Semi</a>
          </li>
        </BurgerNav>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex: 1;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 10;
  width: 300px;
  list-style-type: none;
  text-align: left;
  padding: 20px;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  transform: ${(props) => (props.show ? `translateX(0%)` : `translateX(100%)`)};
  transition: transform 0.2s ease-in-out;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MenuCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
