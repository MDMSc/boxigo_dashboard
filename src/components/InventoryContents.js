import { Typography } from "@mui/material";
import React from "react";

export default function InventoryContents({ isDisplay, categories }) {
  const checkQty = (category) => {
    return category.items.reduce((accum, currVal) => {
      return (accum += currVal.qty);
    }, 0);
  };
  
  return (
    <div style={{ display: isDisplay ? "block" : "none" }}>
      <div className="inventory_details">
        {categories.length &&
          categories.map((category, index) => {
            if (checkQty(category) > 0) {
              return (
                <div key={index} className="details_single_type">
                  <Typography
                    variant="subtitle2"
                    fontSize="1rem"
                    fontWeight="600"
                    mb={1}
                  >
                    {category.displayName}
                  </Typography>

                  {category.items.length &&
                    category.items.map((item, index) => {
                      if (item.qty) {
                        let subTitle = "";
                        if (item.type.length) {
                          item.type.forEach((type) => {
                            if (type.selected) {
                              subTitle += `${type.option}, `;
                            }
                          });
                        } else if (item.size !== null) {
                          item.size.forEach((size) => {
                            if (size.selected) {
                              subTitle += `${size.option}, `;
                            }
                          });
                        } else {
                          subTitle = `${item.typeOptions}`;
                        }

                        return (
                          <div key={index} className="inventory_count">
                            <div>
                              <Typography
                                variant="caption"
                                fontSize="0.8rem"
                                m={0}
                              >
                                {item.displayName}
                              </Typography>
                              <br />
                              <Typography
                                variant="caption"
                                fontSize="0.6rem"
                                fontWeight="600"
                                m={0}
                              >
                                {subTitle}
                              </Typography>
                            </div>
                            <Typography
                              variant="caption"
                              fontSize="0.8rem"
                              fontWeight="600"
                            >
                              {item.qty}
                            </Typography>
                          </div>
                        );
                      }
                    })}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
