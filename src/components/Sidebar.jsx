import { iconButtonClasses, Stack } from "@mui/material";
import { useState } from "react";
import { categories } from "../utils/constants";

export const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
      }}
    >
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            backgroundColor: selectedCategory === category.name && "#fc1503",
            color: "#fff"
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
              transition: "all 0.3s"
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              transition: "all 0.3s"
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
