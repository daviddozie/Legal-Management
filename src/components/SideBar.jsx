import React, { useState } from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import GridViewIcon from "@mui/icons-material/GridView";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "./ListItem"; // Import your ListItem component
import Dropdown from "./Dropdown"
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BalanceIcon from '@mui/icons-material/Balance';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NestedList() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(dropdown === openDropdown ? null : dropdown);
  };

  return (
  
      <div className="div-1 bg-[#696969] w-[22%] h-screen overflow-y-auto">
        <List
          className="  m-w-m"
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              className="custom-subheader p-2"
              component="div"
              id="nested-list-subheader"
            >
              <h2 className="text-[18px] text-white font-[300]">
                LEGAL CASE MANAGEMENT
              </h2>
            </ListSubheader>
          }
        >
          <ListItem label="Dashboard" icon={<GridViewIcon />} />
          <Dropdown 
            label="Cases"
            mainIcon={<HomeRepairServiceIcon />}
            subItems={[
              { label: "Add Cases", icon: <HomeRepairServiceIcon  /> },
              { label: "All Cases", icon: <HomeRepairServiceIcon  /> },
              { label: "All Pending Cases", icon: <HomeRepairServiceIcon  /> },
              { label: "All Case History", icon: <HomeRepairServiceIcon  /> },
              { label: "My Open Cases", icon: <HomeRepairServiceIcon  /> },
              { label: "My Pending Cases", icon: <HomeRepairServiceIcon  /> },
              { label: "My Case History", icon: <HomeRepairServiceIcon  /> },
            ]}
            isOpen={openDropdown === "Cases"}
            onToggle={() => handleDropdownToggle("Cases")}
          />
          {/* Add other list items or dropdowns here */}
          {/* Dropdowns go here */}
          <Dropdown
            label="Lawyers"
            mainIcon={<BalanceIcon />}
            subItems={[
              { label: "Add Lawyers", icon: <BalanceIcon /> },
              { label: "All Lawyers", icon: <BalanceIcon /> },
            ]}
            isOpen={openDropdown === "Lawyers"}
            onToggle={() => handleDropdownToggle("Lawyers")}
          />

          {/* casepoint */}
          <Dropdown
            label="Case Point"
            mainIcon={<ImportContactsIcon/>}
            subItems={[
              { label: "Add Lawyers", icon: <ImportContactsIcon  /> },
              { label: "All Lawyers", icon: <ImportContactsIcon  /> },
              { label: "All Lawyers", icon: <ImportContactsIcon  /> },
            ]}
            isOpen={openDropdown === "Case Point"}
            onToggle={() => handleDropdownToggle("Case Point")}
          />

          {/* Hearing Dtails */}
          <Dropdown
            label="Hearing Details"
            mainIcon={<SpeakerPhoneIcon/>}
            subItems={[
              { label: "Add Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
              { label: "All Lawyers", icon: <SpeakerPhoneIcon  /> },
            ]}
            isOpen={openDropdown === "Hearing Details"}
            onToggle={() => handleDropdownToggle("Hearing Details")}
          />
          {/* Documentation */}
          <Dropdown
            label="Documentation"
            mainIcon={<TextSnippetIcon />}
            subItems={[
              { label: "Add Lawyers", icon: <TextSnippetIcon /> },
              { label: "All Lawyers", icon: <TextSnippetIcon /> },
            ]}
            isOpen={openDropdown === "Documentation"}
            onToggle={() => handleDropdownToggle("Documentation")}
          />

          {/* settings */}
          <Dropdown
            label="Settings"
            mainIcon={<SettingsIcon/>}
            subItems={[
              { label: "Add Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
              { label: "All Lawyers", icon: <SettingsIcon  /> },
            ]}
            isOpen={openDropdown === "Settings"}
            onToggle={() => handleDropdownToggle("Settings")}
          />
        </List>
      </div>
  );
}
