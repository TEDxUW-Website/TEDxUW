import React from "react";
import styled from "styled-components";
import {} from "./styles";

// https://codesandbox.io/s/trusting-panna-hv7tr?file=/src/Burger.js:0-3115
import { NavLink } from "react-router-dom";

const StyledBurger = styled.button`
  @media (min-width: 1200px) {
    display: none;
  }
  position: absolute;
  top: 15%;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    color: white;
    background: white;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
    padding: 1rem;
  }
  a {
    font-size: 2rem;

    padding: 2rem 0;
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.2rem;
    line-height: 130%;

    text-decoration: none;
    transition: color 0.3s linear;
    color: white;
    background: none;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
      line-height: 50%;
    }

    &:hover {
      color: #8b8b8b;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/Speakers">
        Speakers
      </NavLink>
      <NavLink exact to="/Partners">
        Partners
      </NavLink>
      <NavLink exact to="/About">
        About
      </NavLink>
      <NavLink exact to="/Faq">
        FAQ
      </NavLink>
      <a href="https://medium.com/@tedxuw">Blog</a>
      <a href="">Register Now</a>
    </StyledMenu>
  );
};

export default HamburgerMenu;
