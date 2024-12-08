import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utils/constants'
const VideoCard = (props) => {
  // console.log(props)
  const vdoId=props.video.id.videoId
  const vdoTitle=props.video.snippet.title
  const chnlTitle=props.video.snippet.channelTitle
  
  
  return (
    <>
   { 
    vdoId && <Card sx={{bgcolor:"red",width:{md:"380px",xs:"100%"},borderRadius:"10px"}}>
    <Link to={`/video/${vdoId}`} >
    <CardMedia  sx={{height:"250px",width:"400px"}} alt="thumbnailImg" component="img" src={`https://i.ytimg.com/vi/${vdoId}/hqdefault.jpg`} />
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e",height:"106px"}}>

      <Link to={`/video/${vdoId}`}>
        <Typography font="bold" variant="subtitle1" color="#FFF">{ vdoTitle.slice(0,70)+"....."}</Typography>
      </Link>
      
      <Link to={`/video/${vdoId}`}>
        <Typography variant="subtitle2" color="gray">{ chnlTitle}
        <CheckCircle sx={{fontSize:18,color:'gray',ml:'5px'}}/>
        </Typography>
      </Link>

    </CardContent>
    </Card>
   }
    </>
  )
}

export default VideoCard