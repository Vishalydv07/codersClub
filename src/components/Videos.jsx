import { Box, Stack } from '@mui/system'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
     {videos.map((item,idx)=>    
      <Box key={idx}>
        {item.id.videoId   && <VideoCard video={item}/>}
        {item.id.channelId && <ChannelCard channelDetails={item}/>}
      </Box>
     )}
    </Stack>
  )
}

export default Videos
