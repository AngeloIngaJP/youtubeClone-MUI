import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        left: 0,
        justifyContent: "space-between",
        height: { sx: "auto", md: "8vh" }
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};
