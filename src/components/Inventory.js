import React, { useState } from "react";
import "../css/inventory.css";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InventoryContents from "./InventoryContents";

export default function Inventory({ inventory }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="single_inventory">
      <div className="inventory_header" onClick={() => setToggle(!toggle)}>
        <div className="inventory_overview">
          <Typography
            variant="subtitle2"
            fontSize="1rem"
            fontWeight="600"
            sx={{ color: "red", mx: 3 }}
          >
            {inventory.displayName}
          </Typography>
          <div>
            <Typography
              variant="subtitle2"
              fontSize="0.8rem"
              fontWeight="500"
              sx={{ color: "#ffffff" }}
            >
              {inventory.category.reduce((accum, currVal) => {
                currVal.items.forEach((item) => {
                  accum += item.qty;
                });
                return accum;
              }, 0)}
            </Typography>
          </div>
        </div>

        {toggle ? (
          <KeyboardArrowUpIcon sx={{ p: 1 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ p: 1 }} />
        )}
      </div>

      <InventoryContents isDisplay={toggle} categories={inventory.category} />
    </div>
  );
}
