import { Typography, Grid, Box, Paper } from "@mui/material"
import Link from "next/link"
/* eslint-disable @next/next/no-img-element */

export default function CruiseCard({ cruise }) {
    return (
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
            <Link href="cruise/[id]" as={`/cruise/${cruise.id}`}>
                <Box
                    sx={{
                        width: 350,
                        transition: "all .2s ease-in-out",
                        "&:hover": {
                            cursor: "pointer",
                            transform: "scale(1.1)",
                            transition: "all .3s ease-in-out",
                        },
                        padding: 1,
                        borderRadius: 4,
                    }}
                    elevation={3}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: 300,
                        }}
                    >
                        <img
                            src={cruise.image}
                            alt={`image of ${cruise.name}`}
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                                borderRadius: 16,
                            }}
                        />
                    </Box>
                    <Box sx={{}}>
                        <Typography sx={{ fontSize: 28, fontWeight: "500" }}>
                            {cruise.name}
                        </Typography>
                        <Typography sx={{ color: "rgba(0,0,0,0.5)", marginTop: -1}}>{cruise.location}</Typography>
                        <Typography sx={{ color: "rgba(0,0,0,0.5)" }}>{cruise.price}</Typography>
                    </Box>
                </Box>
            </Link>
        </Grid>
    )
}
