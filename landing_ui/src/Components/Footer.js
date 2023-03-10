
import { Box, Typography } from '@mui/material'
import React from 'react'

import logo from "./Image/ImpaktApps4.jpg"


const Footer = () => {
  return (
    <Box sx={{textAlign:"right",paddingRight:"15px", margin: "0",width:"100%",position:"absolute",zIndex:-1,color: "white", color: "white",background:"linear-gradient(rgba(34, 42, 69, 0.96), rgba(34, 42, 69, 0.96))" }}>
        <Typography sx={{fontSize:"22px",paddingLeft:"10px" }}>Power By:
          </Typography><br></br>
          <Box>
            <img  src={logo} alt="Impakt_logo" width={250} height={60} />
          </Box>
    </Box>
  )
}

export default Footer
