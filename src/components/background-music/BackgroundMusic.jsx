import React, { useRef, useEffect } from 'react';

const BackgroundMusic = ({ src, volume = 0.5 }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = volume;

        const playAudio = () => {
            audio.play().catch(error => console.log(error));
            // Remove the event listener after the first interaction
            window.removeEventListener('click', playAudio);
        };

        // Add event listener for user interaction
        window.addEventListener('click', playAudio);

        // Clean up function to remove the event listener if the component is unmounted
        return () => {
            window.removeEventListener('click', playAudio);
        };
    }
  }, [volume]);

  return (
    <audio ref={audioRef} loop>
        <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default BackgroundMusic;