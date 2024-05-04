import { Card, styled, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from "@mui/material";
import "./projectCards.css"
import { useState } from "react";

const ProjectCards = ({name}) => {
    const [raised, setRaised] = useState(true)
    



    return (
        <StyledCard raised={raised} onMouseOver={() => setRaised(false)} onMouseLeave={() => setRaised(true)}>
            <CardActionArea className="cardAction">
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6356b96c769c1401814853ac_w1J8KBb9PIN9Aos-D7vh8m2MUL7BzEgeH0hjXyfHphXm0wnuDaHavLSHG322C3mQrZSEpKLCd2ockfI8RZIMJJIwVXBEaSaJtgHrWUMZM6p619wdXRJTKYUBMfXz6-yqztNxv6xq5v87GjdgLu_oSD58ysvr-z3ztSn5Em7YUoS6rBp0-OomqCfz5g.jpeg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                {/* <Typography sx={{position: "absolute", left: 0, right: 0, top: 0, bottom: 0, zIndex: 2, marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto"}}>See More</Typography> */}
                <div style={{position: "absolute", left: "50%", top: "50%", zIndex: 2}}>
                    <Typography className='hoverText' fontWeight={600} color="white" sx={{position: "relative", left: "-50%"}}>See more</Typography>
                </div>
            </CardActionArea>
        </StyledCard>
    )
}

const StyledCard = styled(Card)(({theme}) => ({
    backgroundColor: "#9ab67f",
    boxShadow: 20
}))

export default ProjectCards;