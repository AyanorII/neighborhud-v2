import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AltRouteRoundedIcon from "@mui/icons-material/AltRouteRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const path = router.asPath;

  return (
    <StyledBottomNav>
      <Link href="/">
        <StyledLink className={path === "/" ? "active" : ""}>
          <HomeRoundedIcon fontSize="large" />
        </StyledLink>
      </Link>
      <Link href="/feed">
        <StyledLink className={path === "/feed" ? "active" : ""}>
          <NewspaperRoundedIcon fontSize="large" />
        </StyledLink>
      </Link>
      <Link href="/incidents/new">
        <StyledLink className={path === "/incidents/new" ? "active" : ""}>
          <AddRoundedIcon fontSize="large" />
        </StyledLink>
      </Link>
      <Link href="/route">
        <StyledLink className={path === "/route" ? "active" : ""}>
          <AltRouteRoundedIcon fontSize="large" />
        </StyledLink>
      </Link>
      <Link href="/profile">
        <StyledLink className={path === "/profile" ? "active" : ""}>
          <ManageAccountsIcon fontSize="large" />
        </StyledLink>
      </Link>
    </StyledBottomNav>
  );
};

export default Footer;

const StyledBottomNav = styled.nav`
  padding: 1rem;
  background-color: #1a1919;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled.a`
  color: #fff;
  transition: all 0.35s;

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;
