import styled from "@emotion/styled";

export const SideMENU = styled("div")`
  height: auto;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 13px 3px rgba(204, 204, 204, 0.45);
  -webkit-box-shadow: 0px 0px 13px 3px rgba(204, 204, 204, 0.45);
  -moz-box-shadow: 0px 0px 13px 3px rgba(204, 204, 204, 0.45);
`;
export const Title = styled("div")`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeadTit = styled("div")`
  font-family: "Dancing Script", cursive;
  font-size: 25px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background-color: #000;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background-color: #000;
    border-radius: 50%;
    border: 4px solid #fff;
  }
`;
export const Unlist = styled("div")`
  display: inline-block;
  list-style: none;
  padding: 1rem 2rem 19px;
  width: 100%;
  .link_nav {
    font-size: 17px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    padding: 8px 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #444;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(16deg, transparent, #489bff);
      z-index: -1;
      transform: translateX(-70%);
      transition: all 0.3s ease;
      opacity: 0;
    }
    &:hover {
      color: #489bff;
      svg {
        color: #489bff;
      }
    }
    &:hover:before {
      transform: translateX(0);
      opacity: 1;
    }
    svg {
      color: #444;
      font-size: 21px;
      transition: all 0.3s ease;
    }
  }
  .active {
    background-color: #489bff;
    color: #fff;
    &:hover {
      background-color: #489bff;
      color: #fff;
      svg {
        color: #fff;
      }
    }
    svg {
      color: #fff;
    }
  }
`;
export const ListItem = styled("div")`
  /* &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(16deg, transparent, #489bff);
    z-index: -1;
    transform: translateX(-70%);
    transition: all 0.3s ease;
    opacity: 0;
  } */
`;
