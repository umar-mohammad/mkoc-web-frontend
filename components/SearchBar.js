import React, { useState } from "react"
import { Typography, Box, TextField, Button } from "@mui/material"

export default function SearchBar({ handleSearch }) {
    return (
        <Box
            sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginY: 3,
            }}
        >
            <TextField
                placeholder="Destination"
                sx={{ height: 50, width: 400 }}
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
            />
        </Box>
    )
}
