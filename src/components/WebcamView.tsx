
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WebcamViewProps {
  isRecording: boolean;
  isActive: boolean;
}

const WebcamView: React.FC<WebcamViewProps> = ({ isRecording, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize webcam when component mounts and is active
  useEffect(() => {
    if (isActive && isVideoOn) {
      startWebcam();
    }
    
    return () => {
      stopWebcam();
    };
  }, [isActive, isVideoOn]);

  const startWebcam = async () => {
    try {
      if (streamRef.current) {
        stopWebcam();
      }
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 360 },
          facingMode: "user"
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      streamRef.current = stream;
      setHasPermission(true);
    } catch (err) {
      console.error("Error accessing webcam:", err);
      setHasPermission(false);
    }
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const toggleWebcam = () => {
    if (isVideoOn) {
      stopWebcam();
      setIsVideoOn(false);
    } else {
      setIsVideoOn(true);
    }
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300",
      isActive ? "opacity-100" : "opacity-50 pointer-events-none"
    )}>
      <CardContent className="p-2">
        {hasPermission === false && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-md text-center">
            Unable to access webcam. Please check your browser permissions.
          </div>
        )}
        
        <div className="relative">
          <div className={cn(
            "bg-black rounded-md aspect-video flex items-center justify-center",
            !isVideoOn && "bg-muted"
          )}>
            {isVideoOn ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full rounded-md"
              />
            ) : (
              <div className="text-muted-foreground text-sm">Camera off</div>
            )}
            
            {isRecording && isVideoOn && (
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-white px-2 py-1 bg-red-500/70 rounded-md">
                  REC
                </span>
              </div>
            )}
          </div>
          
          <Button 
            variant="secondary" 
            size="sm" 
            className="absolute bottom-3 right-3"
            onClick={toggleWebcam}
          >
            {isVideoOn ? "Turn Off Camera" : "Turn On Camera"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebcamView;
