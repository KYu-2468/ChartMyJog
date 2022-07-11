import React from "react";
import {
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
  styled,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  House,
  Dashboard,
  Login,
  HelpCenter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function RunTrackerMenu(open, setOpen) {
  const styledLink = { color: "BLACK", textDecoration: "none" };
  const theme = useTheme();
  const drawerWidth = 240;

  const menuClose = () => {
    open.setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
  }));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      open={open.open}
      anchor="right"
    >
      <DrawerHeader>
        <IconButton onClick={menuClose}>
          {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>

      <ListItem button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ListItemIcon>
            <House />{" "}
            <Link to="/home" style={styledLink}>
              {" "}
              HOME
            </Link>
          </ListItemIcon>
        </Typography>
      </ListItem>

      <ListItem button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ListItemIcon>
            <Dashboard />{" "}
            <Link to="/dashboard" style={styledLink}>
              {" "}
              DASHBOARD
            </Link>
          </ListItemIcon>
        </Typography>
      </ListItem>

      <ListItem button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ListItemIcon>
            <Login />{" "}
            <Link to="/signup" style={styledLink}>
              {" "}
              LOGIN/SINUP
            </Link>
          </ListItemIcon>
        </Typography>
      </ListItem>

      <ListItem button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ListItemIcon>
            <HelpCenter />{" "}
            <Link to="/home" style={styledLink}>
              {" "}
              HELP
            </Link>
          </ListItemIcon>
        </Typography>
      </ListItem>
    </Drawer>
  );
}