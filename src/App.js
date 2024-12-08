import { BrowserRouter, Route ,Routes } from "react-router-dom";
import {Box} from '@mui/material'

// //to import our component
// import Navbar from "./components/Navbar"
// import Feed from "./components/Feed"
// import VideoDetail from "./components/VideoDetail"
// import ChannelDetail from "./components/ChannelDetail"
// import SearchFeed from "./components/SearchFeed";

import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components'


function App() {
  return (
<BrowserRouter>
<Box sx={{backgroundColor:"#000",color:"azure"}}>
  <Navbar/>
  <Routes>
    <Route path="/" exact element={<Feed/>}></Route>
    <Route path="/video/:id"  element={<VideoDetail/>}/>
    <Route path="/channel/:id" element={<ChannelDetail/>}/>
    <Route path="/Search/:searchTerm" element={<SearchFeed/>} />
  </Routes>
</Box>
</BrowserRouter>
  );
}

export default App;
