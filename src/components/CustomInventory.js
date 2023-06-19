import React, { useState } from "react";
import "../css/inventory.css";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function CustomInventory({ inventory }) {
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
            Custom Items
          </Typography>
          <div>
            <Typography
              variant="subtitle2"
              fontSize="0.8rem"
              fontWeight="500"
              sx={{ color: "#ffffff" }}
            >
              {inventory.items.length}
            </Typography>
          </div>
        </div>

        {toggle ? (
          <KeyboardArrowUpIcon sx={{ p: 1 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ p: 1 }} />
        )}
      </div>

      <div style={{ display: toggle ? "block" : "none" }}>
        <div className="inventory_details">
          <div className="details_single_type">
            <Typography
              variant="subtitle2"
              fontSize="1rem"
              fontWeight="600"
              mb={1}
            >
              {inventory.units}
            </Typography>
            {inventory.items.length &&
              inventory.items.map((item, index) => (
                <div key={index} className="inventory_count">
                  <div>
                    <Typography variant="caption" fontSize="0.8rem" m={0}>
                      {item.item_name}
                    </Typography>
                    <br />
                    <Typography
                      variant="caption"
                      fontSize="0.6rem"
                      fontWeight="600"
                      m={0}
                    >
                      {item.item_description}
                    </Typography>
                  </div>
                  <Typography
                    variant="caption"
                    fontSize="0.8rem"
                    fontWeight="600"
                  >
                    {item.item_qty}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
