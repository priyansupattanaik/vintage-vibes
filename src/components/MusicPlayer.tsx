import React, { useState, useRef, useEffect } from "react";
import { songs, Song } from "@/data/songs";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  RotateCcw,
} from "lucide-react";
import { formatTime } from "@/utils/formatTime";
import { toast } from "sonner";

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchRotation, setScratchRotation] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const vinylRecordRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const currentSong = songs[currentSongIndex];

  // Animation frame for smooth progress updates
  const animate = () => {
    if (audioRef.current && !isDragging && !isScratching) {
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    // Pause previous song, reset current time, and load new song
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentTime(0);
      setIsPlaying(false);

      // We need to set a small delay to allow the audio to load
      setTimeout(() => {
        if (audioRef.current && isPlaying) {
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
            toast.error("Error playing audio. Please try again.");
          });
        }
      }, 100);
    }

    // Show toast notification for song change
    if (currentSong) {
      toast(`Now playing: ${currentSong.title} by ${currentSong.artist}`, {
        position: "bottom-right",
        duration: 3000,
      });
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
          toast.error("Error playing audio. Please try again.");
        });
        animationRef.current = requestAnimationFrame(animate);
      } else {
        audioRef.current.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Clean up animation frame on component unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch((error) => {
        console.error("Error playing audio:", error);
        toast.error("Error playing audio. Please try again.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prev) => (prev > 0 ? prev - 1 : songs.length - 1));
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prev) => (prev < songs.length - 1 ? prev + 1 : 0));
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
    }
    toast(`Repeat: ${!isLooping ? "On" : "Off"}`, {
      position: "bottom-right",
      duration: 2000,
    });
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging && !isScratching) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const clickPositionInPercentage = (offsetX / rect.width) * 100;
      const newTime = (clickPositionInPercentage / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const dragPositionInPercentage = (offsetX / rect.width) * 100;
      const newTime = (dragPositionInPercentage / 100) * duration;
      setCurrentTime(newTime);
    }
  };

  const handleDragEnd = () => {
    if (isDragging && audioRef.current) {
      audioRef.current.currentTime = currentTime;
      setIsDragging(false);
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    }
  };

  const handleVinylScratchStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsScratching(true);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
    handleVinylScratchMove(e); // Initial move to set position
  };

  const handleVinylScratchMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isScratching && vinylRecordRef.current && audioRef.current) {
      const rect = vinylRecordRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const scratchPositionInPercentage = (offsetX / rect.width) * 100;
      const newTime = (scratchPositionInPercentage / 100) * duration;
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime; // Update audio time directly

      // Calculate rotation based on scratch position
      const totalRotation = 360; // Full rotation for the entire duration
      const rotationDegree = (newTime / duration) * totalRotation;
      setScratchRotation(rotationDegree);
    }
  };

  const handleVinylScratchEnd = () => {
    if (isScratching && audioRef.current) {
      setIsScratching(false);
      setScratchRotation(0); // Reset rotation
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    }
  };

  const handleSongEnd = () => {
    if (isLooping) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    } else {
      handleNextSong();
    }
  };

  const selectSong = (index: number) => {
    if (index !== currentSongIndex) {
      setCurrentSongIndex(index);
      setIsPlaying(true); // Ensure the song starts playing
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
          toast.error("Error playing audio. Please try again.");
        });
      }
    } else {
      handlePlayPause();
    }
  };

  // Reset playback
  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      toast("Playback reset to beginning", {
        position: "bottom-right",
        duration: 2000,
      });
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-vintage-wood bg-wood-grain p-8 rounded-xl shadow-2xl">
        <div className="bg-vintage-panel p-6 rounded-lg border-4 border-vintage-copper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Album Art Section */}
            <div className="md:col-span-1 flex flex-col items-center justify-center">
              <div
                ref={vinylRecordRef}
                className={cn(
                  "vinyl-record mb-6 transition-transform",
                  isPlaying && "animate-spin-record"
                )}
                onMouseDown={handleVinylScratchStart}
                onMouseMove={handleVinylScratchMove}
                onMouseUp={handleVinylScratchEnd}
                onMouseLeave={handleVinylScratchEnd}
                style={{
                  transform: `rotate(${scratchRotation}deg)`,
                  transition: "transform 0.1s linear", // Smooth transition for rotation
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${currentSong.coverArt})`,
                    clipPath: "circle(40% at center)",
                    opacity: 0.85,
                  }}
                />
              </div>

              <div className="text-center bg-vintage-cream p-3 rounded-lg shadow-md border border-vintage-sepia w-full">
                <h2 className="text-2xl font-bold text-vintage-burgundy truncate">
                  {currentSong.title}
                </h2>
                <h3 className="text-lg text-vintage-sepia mb-1 truncate">
                  {currentSong.artist}
                </h3>
                <div className="flex justify-between text-sm text-vintage-sepia/70">
                  <span>{currentSong.album}</span>
                  <span>{currentSong.year}</span>
                </div>
              </div>
            </div>

            {/* Controls and Playlist Section */}
            <div className="md:col-span-2 flex flex-col justify-between">
              {/* Progress Bar */}
              <div className="mb-6 mt-4">
                <div
                  ref={progressBarRef}
                  className="progress-bar"
                  onClick={handleProgressBarClick}
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                >
                  <div
                    className="progress-fill"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                  <div
                    className="knob"
                    style={{ left: `${(currentTime / duration) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm font-vintage">
                  <span className="timer-display">
                    {formatTime(currentTime)}
                  </span>
                  <span className="timer-display">{formatTime(duration)}</span>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <button
                  className="control-button hover-tooltip"
                  onClick={handleReset}
                >
                  <span className="tooltip">Reset</span>
                  <RotateCcw size={22} />
                </button>
                <button
                  className="control-button hover-tooltip"
                  onClick={handlePreviousSong}
                >
                  <span className="tooltip">Previous</span>
                  <SkipBack size={24} />
                </button>
                <button
                  className="control-button w-16 h-16 hover-tooltip"
                  onClick={handlePlayPause}
                >
                  <span className="tooltip">
                    {isPlaying ? "Pause" : "Play"}
                  </span>
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
                <button
                  className="control-button hover-tooltip"
                  onClick={handleNextSong}
                >
                  <span className="tooltip">Next</span>
                  <SkipForward size={24} />
                </button>
                <button
                  className={cn(
                    "control-button hover-tooltip",
                    isLooping && "bg-vintage-gold text-vintage-burgundy"
                  )}
                  onClick={toggleLoop}
                >
                  <span className="tooltip">
                    {isLooping ? "Repeat On" : "Repeat Off"}
                  </span>
                  <Repeat size={22} />
                </button>
              </div>

              {/* Volume Control */}
              <div className="mb-6 flex items-center space-x-4">
                <button
                  className="p-2 text-vintage-sepia hover:text-vintage-burgundy transition-colors cursor-vintage-pointer"
                  onClick={toggleMute}
                >
                  {isMuted || volume === 0 ? <VolumeX /> : <Volume2 />}
                </button>
                <div className="w-full">
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={handleVolumeChange}
                    className="w-full h-2"
                  />
                </div>
              </div>

              {/* Playlist */}
              <div className="bg-vintage-cream/50 p-4 rounded-lg border border-vintage-sepia/50 h-56 overflow-y-auto">
                <h3 className="font-bold text-xl mb-3 text-vintage-burgundy border-b border-vintage-sepia pb-2">
                  Playlist
                </h3>
                <div className="space-y-2">
                  {songs.map((song, index) => (
                    <div
                      key={song.id}
                      className={cn(
                        "playlist-item",
                        currentSongIndex === index && "active"
                      )}
                      onClick={() => selectSong(index)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {currentSongIndex === index && isPlaying && (
                            <span className="playing-indicator"></span>
                          )}
                          <div>
                            <div className="font-semibold">{song.title}</div>
                            <div className="text-sm text-vintage-sepia/70">
                              {song.artist}
                            </div>
                          </div>
                        </div>
                        <div className="text-vintage-sepia/50 text-sm">
                          {song.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnd}
        loop={isLooping}
      />
    </div>
  );
};

export default MusicPlayer;
