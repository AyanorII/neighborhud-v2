import { Typography } from "@mui/material";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Typography
      variant="h4"
      color="white"
      component="h1"
      sx={{ fontFamily: "Squada One" }}
    >
      Neighbor
      <Typography
        variant="h4"
        component="span"
        color="primary"
        sx={{ fontFamily: "Squada One" }}
      >
        HUD
      </Typography>
    </Typography>
  );
};

export default Logo;
