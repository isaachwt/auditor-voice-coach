
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob) => void;
  onRecordingStart: () => void;
  isActive: boolean;
  maxDuration?: number; // in seconds
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({
  onRecordingComplete,
  onRecordingStart,
  isActive,
  maxDuration = 120, // 2 minutes default
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<number | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
    };
  }, [audioURL]);

  const startRecording = async () => {
    try {
      // Reset state
      setRecordingTime(0);
      setAudioURL(null);
      setAudioBlob(null);
      audioChunksRef.current = [];
      
      // Get media stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Create media recorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      // Set up event handlers
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        setAudioBlob(audioBlob);
        setIsRecording(false);
        
        // Clean up stream tracks
        stream.getTracks().forEach(track => track.stop());
        
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }
        
        onRecordingComplete(audioBlob);
      };
      
      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
      onRecordingStart();
      
      // Set up timer
      timerIntervalRef.current = window.setInterval(() => {
        setRecordingTime(prev => {
          const newTime = prev + 1;
          // Auto stop if max duration reached
          if (newTime >= maxDuration && mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            return maxDuration;
          }
          return newTime;
        });
      }, 1000);
      
    } catch (err) {
      console.error("Error starting recording:", err);
      alert("Could not access microphone. Please ensure microphone permissions are granted.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn(
      "w-full transition-all duration-300 ease-in-out",
      isActive ? "opacity-100" : "opacity-50 pointer-events-none"
    )}>
      <div className="space-y-4">
        {/* Timer and progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">
              {isRecording ? "Recording..." : audioURL ? "Recording complete" : "Ready to record"}
            </div>
            <div className="text-sm font-mono">
              {formatTime(recordingTime)} / {formatTime(maxDuration)}
            </div>
          </div>
          
          <Progress value={(recordingTime / maxDuration) * 100} 
            className={cn(
              "h-2 transition-colors", 
              isRecording ? "bg-red-100" : "bg-gray-100",
              "dark:bg-gray-800"
            )}
          />
        </div>
        
        {/* Recording visualization */}
        {isRecording && (
          <div className="h-12 flex items-center justify-center">
            <div className="recording-wave text-auditor-500">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        )}
        
        {/* Audio playback */}
        {audioURL && (
          <div className="flex justify-center py-2">
            <audio src={audioURL} controls className="w-full max-w-md" />
          </div>
        )}
        
        {/* Controls */}
        <div className="flex justify-center gap-4">
          {!isRecording ? (
            <>
              <Button
                onClick={startRecording}
                disabled={!isActive}
                className={cn(
                  "px-4 py-2 rounded-full",
                  "bg-auditor-500 hover:bg-auditor-600 text-white",
                  "flex items-center gap-2"
                )}
              >
                <RecordIcon />
                {audioURL ? "Record Again" : "Start Recording"}
              </Button>
            </>
          ) : (
            <Button
              onClick={stopRecording}
              className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
            >
              <StopIcon />
              Stop Recording
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const RecordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" fill="currentColor" />
  </svg>
);

const StopIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="12" height="12" fill="currentColor" />
  </svg>
);

export default VoiceRecorder;
