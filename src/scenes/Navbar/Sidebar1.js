import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.gray[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        {!isCollapsed && <Typography>{title}</Typography>}
      </MenuItem>
    </NavLink>
  );
};

const Sidebar1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { collapseSidebar } = useProSidebar();

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-active": {
          backgroundColor: `${colors.gray[800]} !important`,
        },
        "& .ps-menu-button:hover": {
          backgroundColor: `${colors.gray[800]} !important`,
        },
        "& .menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <div style={{
        display: 'flex', height: '100%'
      }}>
        <Sidebar>
          <main
            style={{
              textAlign: isCollapsed ? "center" : "right"
            }}>
            <IconButton onClick={() => {
              collapseSidebar()
              setIsCollapsed(!isCollapsed);
            }}>
              <MenuOutlinedIcon />
            </IconButton>
          </main>
          <Menu>
            {!isCollapsed && (
              <Box mb="25px" mt="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/user.jpeg`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.gray[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}>
                    Shahil
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Teacher
                  </Typography>
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : "5%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              {!isCollapsed && (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 10px" }}
                >
                  Data
                </Typography>
              )}
              <Item
                title="Students"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />

              {!isCollapsed && (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 10px" }}
                >
                  Pages
                </Typography>
              )}
              <Item
                title="New Admission"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Timetable"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              {!isCollapsed && (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{ m: "15px 0 5px 10px" }}
                >
                  Charts
                </Typography>
              )}
              <Item
                title="Class Progress"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="Classes Marks"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
              <Item
                title="All Classes"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                isCollapsed={isCollapsed}
              />
            </Box>
          </Menu>
        </Sidebar>
      
      </div>
    </Box >
  );
};

export default Sidebar1;