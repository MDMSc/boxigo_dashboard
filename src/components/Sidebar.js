import React from "react";
import "../css/sidebar.css";
import { SidebarData } from "./SidebarData";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <List width="100%" sx={{ padding: 0, margin: 0 }}>
        {SidebarData.map((val, index) => (
          <ListItem
            key={index}
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={(e) => {
                e.preventDefault();
                navigate(`${val.link}`)
            }}
            disablePadding
            sx={{
                "&:hover":{
                    borderLeft: "3px solid red"
                },
                "&#active": {
                    borderLeft: "3px solid red",
                    background: "#F5F5F5",
                }
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "2rem" }}>{val.icon}</ListItemIcon>
              <ListItemText sx={{ overflowWrap: "break-word", "& span":{
                fontSize: "0.7rem",
                fontWeight: "600",
              } }} primary={val.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
