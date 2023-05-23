'use client'
import React, { useRef } from 'react'
import ReactHlsPlayer from 'react-hls-player'

export default function TestPage() {
    const playerRef = useRef()
    return (
        <div>
            <h1>ssad</h1>
            <ReactHlsPlayer
                src="http://localhost:8080/hls/test.m3u8"
                autoPlay={true}
                controls={true}
                width="100%"
                height="auto"
                playerRef={playerRef}
            />
            ,
        </div>
    )
}
