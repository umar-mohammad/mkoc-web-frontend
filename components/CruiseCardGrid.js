import { Grid } from "@mui/material"
import CruiseCard from "./CruiseCard"

export default function CruiseGrid({ cruises }) {
    return (
        <Grid container sx={{}} spacing={3}>
            {cruises.map((cruise) => (
                <CruiseCard cruise={cruise} key={cruise.id} />
            ))}
        </Grid>
    )
}
