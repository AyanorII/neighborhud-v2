import { AppBar, Box, Stack, Typography } from "@mui/material";
import Logo from "../Logo";

type Props = {};

const Header = (props: Props) => {
  return (
    <AppBar position="fixed" color="transparent" sx={{ backgroundColor: "#1A1919" }}>
      <Box p={3}>
        <Stack justifyContent="center" alignItems="center" spacing={0.5}>
          <Logo />
          <Typography variant="body2" color="GrayText" >Here are the recent incidents in your area</Typography>
        </Stack>
      </Box>
    </AppBar>
  );
};

export default Header;
