
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ElevenLabsApiKeyProps {
  onKeySubmit: (key: string) => void;
}

const ElevenLabsApiKey: React.FC<ElevenLabsApiKeyProps> = ({ onKeySubmit }) => {
  // Hardcoded API key as requested by the user
  const apiKey = "sk_a3a128908bc8c1eac0f6a149b761367477da7b88dfa9ee35";

  // Submit the API key on component mount
  useEffect(() => {
    // Save to localStorage for persistence across refreshes
    localStorage.setItem("elevenLabsApiKey", apiKey);
    onKeySubmit(apiKey);
  }, [onKeySubmit]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ElevenLabs Text-to-Speech</CardTitle>
        <CardDescription>
          Text-to-speech capabilities are enabled for the AI interviewer using ElevenLabs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Using ElevenLabs for high-quality voice synthesis. The AI interviewer will speak the questions aloud.
        </div>
      </CardContent>
    </Card>
  );
};

export default ElevenLabsApiKey;
