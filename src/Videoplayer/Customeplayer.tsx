'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useMyContext } from '../context/Allcontext'
import ReactPlayer from 'react-player'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

// Define props types for MemoizedPlayer
interface MemoizedPlayerProps {
    videoId: string
    muted: boolean
    onEnded: () => void
}



// Child component only re-renders if videoId changes
const MemoizedPlayer = React.memo(({ videoId, muted, onEnded }: MemoizedPlayerProps) => {
    
    const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL

    const url = videoUrl + videoId
    const playerRef = useRef<ReactPlayer>(null)

    return (
        <ReactPlayer
            ref={playerRef}
            url={url}
            width="100%"
            height="100%"
            playing
            muted={muted}
            onEnded={onEnded}
        />
    )
})

// Define props types for Customeplayer
interface CustomeplayerProps {
    videoId: string
}

const Customeplayer: React.FC<CustomeplayerProps> = ({ videoId }) => {
    const { setCuurentId, setFirstrefresh } = useMyContext()
    const [muted, setMuted] = useState<boolean>(true)
    const [currentVideoId, setCurrentVideoId] = useState<string>(videoId)

    useEffect(() => {
        if (videoId && videoId !== currentVideoId) {
            setCurrentVideoId(videoId)
            setCuurentId(videoId)
        }
    }, [videoId, currentVideoId, setCuurentId])

    const toggleMute = () => setMuted((prev) => !prev)

    return (
        <div className="relative w-full h-full">
            <div className="w-full h-[240px]">
                <MemoizedPlayer
                    videoId={currentVideoId}
                    muted={muted}
                    onEnded={() => setFirstrefresh((prev: number) => prev + 1)}
                />
            </div>
            <button
                onClick={toggleMute}
                className="absolute bottom-5 left-0 bg-white p-2 text-xl z-50"
                title={muted ? 'Unmute' : 'Mute'}
            >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
        </div>
    )
}

export default Customeplayer
