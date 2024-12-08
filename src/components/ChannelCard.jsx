import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia,  Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = (props) => {
console.log("channel",props)
const channelImg= props.channelDetails.snippet.thumbnails.high.url
const channelName= props.channelDetails.snippet.title
const channelId=props.channelDetails.id.channelId
// console.log(channelId)
// console.log(channelImg)
  return (
    <Box>

      <Link to={`/channel/${channelId}`}>

      <CardContent sx={{display:"flex", flexDirection:"column",  color:"#fff" , height:"300px" ,width:"380px" , textAlign:"center"}}>

      <CardMedia component="img" src={channelImg||demoProfilePicture}  alt="img" sx={{height:"200px",width:"200px", borderRadius:"50%", margin:"auto" }}/>

      <Typography variant="h6" sx={{textDecoration:"none"}}>{channelName}<CheckCircle sx={{fontSize:18,color:'gray',ml:'5px'}}/></Typography>
      
      </CardContent>
               
      </Link>

    </Box>
  )
}

export default ChannelCard