/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography } from "@mui/material"
import Nav from "../../../components/Nav"

const FIFTEEN_MINUTES = 15 * 60

export default function CruisePage({ cruise: cruiseArray }) {
    const cruise = cruiseArray[0]

    return (
        <>
            <Nav />
            <Box
                sx={{
                    width: "100%",
                }}
            >
                <img
                    src={cruise.image}
                    alt={`image of ${cruise.name}`}
                    style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                    }}
                />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: "120px",
                    left: "120px",
                    color: "black",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    boxShadow: "0px 0px 50px 28px rgba(255,255,255,0.2)",
                    paddingX: 2,
                }}
            >
                <Typography sx={{ fontSize: 100 }}>{cruise.name}</Typography>
                <Typography variant="h2" sx={{ fontSize: 50, marginTop: -4 }}>
                    {cruise.location}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: 30, marginTop: -1 }}>
                    {cruise.price}
                </Typography>
            </Box>
            <Container>
                <Box>
                    <Typography variant="h2" sx={{ paddingY: 2 }}>
                        Details
                    </Typography>
                    <Typography variant="body1">
                        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry&apos;s standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                    </Typography>
                    <Typography variant="h2" sx={{ paddingY: 2 }}>
                        Services
                    </Typography>
                    <Typography variant="body2" sx={{ paddingBottom: 10 }}>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using &apos;Content here, content here&apos;, making it look like
                        readable English. Many desktop publishing packages and web page editors now
                        use Lorem Ipsum as their default model text, and a search for &apos;lorem
                        ipsum&apos; will uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export const getStaticProps = async (context) => {
    const cruise = await (
        await fetch(`https://mkoc-backend.herokuapp.com/cruises/${context.params.id}`)
    ).json()

    return {
        props: {
            cruise,
        },
        revalidate: FIFTEEN_MINUTES,
    }
}

export const getStaticPaths = async (context) => {
    const data = await (await fetch("https://mkoc-backend.herokuapp.com/cruises")).json()

    const paths = data.cruises
        .map((cruise) => cruise.id)
        .map((id) => ({
            params: {
                id: id.toString(),
            },
        }))

    return {
        paths,
        fallback: false,
    }
}
