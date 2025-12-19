import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
    handleClose();
  };

  const handleDashboard = () => {
    navigate("/admin/dashboard");
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="text-white"
      >
        <CgProfile size={28} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {role === "user" && <MenuItem onClick={handleProfile}>My Profile</MenuItem>}

        {role === "admin" && <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>}

        <MenuItem onClick={handleLogout} className="text-red-500">
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BasicMenu;
