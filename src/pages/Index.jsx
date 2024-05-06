import { Container, VStack, Button, Text, IconButton, Box } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import React, { useState } from "react";

const tracks = [
  { id: 1, title: "Track 1", url: "https://example.com/track1.mp3" },
  { id: 2, title: "Track 2", url: "https://example.com/track2.mp3" },
  { id: 3, title: "Track 3", url: "https://example.com/track3.mp3" }
];

const Index = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(new Audio(tracks[currentTrackIndex].url));

  const play = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const nextTrack = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      audioRef.current.src = tracks[currentTrackIndex + 1].url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const previousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      audioRef.current.src = tracks[currentTrackIndex - 1].url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">{tracks[currentTrackIndex].title}</Text>
        <Box>
          <IconButton aria-label="Previous" icon={<FaStepBackward />} onClick={previousTrack} isDisabled={currentTrackIndex === 0} />
          {isPlaying ? (
            <IconButton aria-label="Pause" icon={<FaPause />} onClick={pause} />
          ) : (
            <IconButton aria-label="Play" icon={<FaPlay />} onClick={play} />
          )}
          <IconButton aria-label="Next" icon={<FaStepForward />} onClick={nextTrack} isDisabled={currentTrackIndex === tracks.length - 1} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;