import React, { useState } from "react";
import "../css/singlemove.css";
import { Button, Divider, Icon, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HomeIcon from "@mui/icons-material/Home";
import { FaBoxes, FaCalendarDay } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { TiPencil } from "react-icons/ti";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Inventory from "./Inventory";
import CustomInventory from "./CustomInventory";

export default function SingleMove({ data }) {
  const datetime = data.moving_on.split(" ");

  const [toggleData, setToggleData] = useState(false);
  return (
    <div className="singlemove">
      <div className="schedule">
        <div>
          <Typography variant="subtitle2" fontWeight="600">
            From
          </Typography>
          <Typography variant="caption" fontSize="0.7rem">
            {data.moving_from}
          </Typography>
        </div>

        <div className="icon">
          <Icon>
            <EastIcon sx={{ color: "red" }} />
          </Icon>
        </div>

        <div>
          <Typography variant="subtitle2" fontWeight="600">
            To
          </Typography>
          <Typography variant="caption" fontSize="0.7rem">
            {data.moving_to}
          </Typography>
        </div>

        <div>
          <Typography variant="subtitle2" fontWeight="600">
            Request#
          </Typography>
          <Typography
            variant="body2"
            color="red"
            fontWeight="600"
            fontSize="1rem"
          >
            {data.estimate_id}
          </Typography>
        </div>
      </div>

      <div className="overview">
        <div>
          <HomeIcon sx={{ color: "red", mr: "0.5rem" }} />
          <Typography variant="caption">{data.property_size}</Typography>
        </div>

        <div>
          <FaBoxes style={{ color: "red", marginRight: "0.5rem" }} />
          <Typography variant="caption">{data.total_items}</Typography>
        </div>

        <div>
          <GiPathDistance style={{ color: "red", marginRight: "0.5rem" }} />
          <Typography variant="caption">{data.distance}</Typography>
        </div>

        <div>
          <FaCalendarDay style={{ color: "red", marginRight: "0.5rem" }} />
          <Typography variant="caption">{`${datetime[0]} at ${datetime[1]}`}</Typography>
          <TiPencil style={{ marginLeft: "0.7rem" }} />
        </div>

        <div>
          {data.move_date_flexible == true ? (
            <>
              <CheckBoxIcon sx={{ color: "red", mr: "0.5rem" }} />
              <Typography variant="caption">is flexible</Typography>
            </>
          ) : (
            <>
              <CheckBoxOutlineBlankIcon sx={{ color: "red", mr: "0.5rem" }} />
              <Typography variant="caption">is not flexible</Typography>
            </>
          )}
        </div>

        <div>
          <Button
            variant="outlined"
            sx={{
              color: "red",
              mr: "0.5rem",
              border: "2px solid red",
              textTransform: "none",
              "&:hover": {
                background: "red",
                border: "2px solid red",
                color: "#ffffff",
              },
            }}
            onClick={() => setToggleData(!toggleData)}
          >
            View move details
          </Button>

          <Button
            variant="contained"
            sx={{
              background: "red",
              border: "2px solid red",
              textTransform: "none",
              "&:hover": {
                background: "#ffffff",
                border: "2px solid red",
                color: "red",
              },
            }}
          >
            {data.custom_status}
          </Button>
        </div>
      </div>

      <Typography
        variant="caption"
        sx={{ display: "flex", alignItems: "center", my: "1.5rem" }}
      >
        <ReportProblemIcon
          fontSize="small"
          sx={{ color: "red", mr: "0.5rem" }}
        />
        <Typography variant="caption" fontWeight="600">
          Disclaimer:&nbsp;
        </Typography>
        <span>Please update your move date before two days of shifting</span>
      </Typography>

      <div
        className="details"
        style={{ display: toggleData ? "block" : "none" }}
      >
        {/* Additional Information */}
        <div className="individual_section">
          <div className="section_header">
            <Typography variant="subtitle2" fontSize="1rem" fontWeight="600">
              Additional Information
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "black",
                color: "#ffffff",
                textTransform: "none",
                "&:hover": {
                  background: "#ffffff",
                  color: "black",
                },
              }}
            >
              Edit Additional Info
            </Button>
          </div>
          <Typography variant="caption" fontSize="0.8rem">
            {`Old House: ${data.old_house_additional_info}. New House: ${data.new_house_additional_info}`}
          </Typography>
        </div>

        {/* House Details */}
        <div className="individual_section">
          <div className="section_header">
            <Typography variant="subtitle2" fontSize="1rem" fontWeight="600">
              House Details
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "black",
                color: "#ffffff",
                textTransform: "none",
                "&:hover": {
                  background: "#ffffff",
                  color: "black",
                },
              }}
            >
              Edit House Details
            </Button>
          </div>

          <div className="section_details" id="existing_house">
            <Typography
              variant="subtitle2"
              fontSize="0.8rem"
              fontWeight="600"
              sx={{ color: "red", mb: "0.5rem" }}
            >
              Existing House Details
            </Typography>
            <div className="house_details">
              <div>
                <Typography
                  variant="subtitle2"
                  fontSize="0.8rem"
                  fontWeight="600"
                >
                  Floor No.
                </Typography>
                <Typography variant="caption">{data.old_floor_no}</Typography>
              </div>

              <div>
                <Typography
                  variant="subtitle2"
                  fontSize="0.8rem"
                  fontWeight="600"
                >
                  Elevator Available
                </Typography>
                <Typography variant="caption">{data.old_elevator_availability}</Typography>
              </div>

              <div>
                <Typography
                  variant="subtitle2"
                  fontSize="0.8rem"
                  fontWeight="600"
                >
                  Distance from Elevator / Staircase to truck
                </Typography>
                <Typography variant="caption">{data.old_parking_distance}</Typography>
              </div>
            </div>
          </div>

          <div className="section_details" id="new_house">
            <Typography
              variant="subtitle2"
              fontSize="0.8rem"
              fontWeight="600"
              sx={{ color: "red", mb: "0.5rem" }}
            >
              New House Details
            </Typography>
            <div className="house_details">
              <div>
                <Typography
                  variant="subtitle2"
                  fontSize="0.8rem"
                  fontWeight="600"
                >
                  Floor No.
                </Typography>
                <Typography variant="caption">{data.new_floor_no}</Typography>
              </div>

              <div>
                <Typography
                  variant="subtitle2"
                  fontSize="0.8rem"
                  fontWeight="600"
                >
                  Elevator Available
                </Typography>
                <Typography variant="caption">{data.new_elevator_availability}</Typography>
              </div>

              <div>
                <Typography
                  variant="subtitle2"
                  fontSize="0.8rem"
                  fontWeight="600"
                >
                  Distance from Elevator / Staircase to truck
                </Typography>
                <Typography variant="caption">{data.new_parking_distance}</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Details */}
        <div className="individual_section">
          <div className="section_header">
            <Typography variant="subtitle2" fontSize="1rem" fontWeight="600">
              Inventory Details
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "black",
                color: "#ffffff",
                textTransform: "none",
                "&:hover": {
                  background: "#ffffff",
                  color: "black",
                },
              }}
            >
              Edit Inventory
            </Button>
          </div>

          <div className="section_details" id="inventory_information">
            {
                data && data.items && data.items.inventory.length && data.items.inventory.map((val, index) => (
                    <Inventory key={index} inventory={val} />
                ))
            }
            <CustomInventory inventory={data.items.customItems} />
          </div>
        </div>
      </div>

      <Divider />
    </div>
  );
}
