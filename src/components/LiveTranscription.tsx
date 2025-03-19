
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LiveTranscriptionProps {
  isActive: boolean;
  onTranscriptionUpdate?: (text: string) => void;
}

const LiveTranscription: React.FC<LiveTranscriptionProps> = ({
  isActive,
  onTranscriptionUpdate,
}) => {
  const [transcript, setTranscript] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    // Check if browser supports SpeechRecognition
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.error("Speech recognition not supported by this browser");
      return;
    }

    // Create speech recognition instance
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    
    // Configure recognition
    if (recognitionRef.current) {
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      // Set up event handlers
      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        const currentTranscript = finalTranscript + interimTranscript;
        setTranscript(currentTranscript);
        
        // Notify parent component if callback provided
        if (onTranscriptionUpdate) {
          onTranscriptionUpdate(currentTranscript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        if (isListening) {
          // If still meant to be listening, restart recognition
          recognitionRef.current?.start();
        }
      };
    }

    return () => {
      // Cleanup
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onTranscriptionUpdate]);

  // Control speech recognition based on active state
  useEffect(() => {
    if (isActive && !isListening && recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error("Error starting speech recognition:", error);
      }
    } else if (!isActive && isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, [isActive, isListening]);

  return (
    <Card className={cn(
      "glass-panel transition-opacity duration-300",
      isActive ? "opacity-100" : "opacity-50"
    )}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className={cn(
            "w-3 h-3 rounded-full transition-colors",
            isListening ? "bg-red-500 animate-pulse" : "bg-gray-300"
          )} />
          <span className="text-sm font-medium">
            {isListening ? "Listening..." : "Transcription paused"}
          </span>
        </div>
        
        <div className="min-h-[80px] max-h-[200px] overflow-y-auto p-3 bg-background/50 rounded border text-sm">
          {transcript ? (
            transcript
          ) : (
            <span className="text-muted-foreground italic">
              {isListening 
                ? "Start speaking to see transcription..." 
                : "Transcription will appear here when recording starts"}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveTranscription;
