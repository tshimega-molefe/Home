import { FC } from "react"

import HoverCard from "../product-section/hover-card"

interface VideoPlayerProps {}

const VideoPlayer: FC<VideoPlayerProps> = ({}) => {
  return (
    <div className="relative z-[1]">
      <HoverCard backgroundColor="#939aff" direction="" left="0">
        <div className="my-6 flex-1 flex-col justify-between overflow-auto p-5 py-20 md:flex md:min-w-[400px] md:space-y-20 md:p-10"></div>
      </HoverCard>
    </div>
  )
}

export default VideoPlayer
