import { Typography, Box, AppBar } from "@mui/material"
import Link from "next/link"

export default function Nav() {
    return (
        <AppBar
            position="static"
            sx={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                backgroundColor: "rgba(21, 78, 184)",
            }}
        >
            <Link href="/">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                            },
                            paddingLeft: 2,
                            paddingRight: 1,
                            paddingY: 1,
                            fontWeight: "500",
                        }}
                    >
                        My
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                            },
                            paddingY: 1,
                            fontWeight: "200",
                        }}
                    >
                        kind of cruise
                    </Typography>
                </Box>
            </Link>
        </AppBar>
    )
}
