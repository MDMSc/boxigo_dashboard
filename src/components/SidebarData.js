import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import {RiLogoutCircleFill} from "react-icons/ri";

export const SidebarData = [
    {
        title: "MY MOVES",
        icon: <LocalShippingIcon />,
        link: "/mymoves",
    },
    {
        title: "MY PROFILE",
        icon: <PersonIcon />,
        link: "/myprofile",
    },
    {
        title: "GET QUOTE",
        icon: <RequestQuoteIcon />,
        link: "/getquote",
    },
    {
        title: "LOGOUT",
        icon: <RiLogoutCircleFill style={{ fontSize: "23px", padding: "0.1rem" }} />,
        link: "/logout",
    },
]
