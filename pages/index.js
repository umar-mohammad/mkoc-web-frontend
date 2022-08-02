import { Container } from "@mui/material"
import Nav from "../components/Nav"
import Search from "../components/SearchBar"
import CruiseGrid from "../components/CruiseCardGrid"
import { useState } from "react"

const FIVE_MINUTES = 60 * 5

export default function Home({ data }) {
    const [cruises, setCruises] = useState(data.cruises)
    const handleSearch = (search) => {
        const filter = search.toUpperCase()

        const updatedData = data.cruises.filter((cruise) => {
            const matchName = cruise.name.toUpperCase().indexOf(filter) != -1
            const matchLocation = cruise.location.toUpperCase().indexOf(filter) != -1

            if (matchName || matchLocation) {
                return true
            } else {
                return false
            }
        })

        setCruises(updatedData)
    }

    return (
        <>
            <Nav />
            <Search handleSearch={handleSearch} />
            <Container maxWidth="xl" sx={{ paddingBottom: 50 }}>
                <CruiseGrid cruises={cruises} />
            </Container>
        </>
    )
}

export const getStaticProps = async (context) => {
    const data = await (await fetch("https://mkoc-backend.herokuapp.com/cruises")).json()

    return {
        props: {
            data,
        },
        revalidate: FIVE_MINUTES,
    }
}
