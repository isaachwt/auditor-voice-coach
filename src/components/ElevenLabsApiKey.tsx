
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ElevenLabsApiKeyProps {
  onKeySubmit: (key: string) => void;
}

const ElevenLabsApiKey: React.FC<ElevenLabsApiKeyProps> = ({ onKeySubmit }) => {
  const [apiKey, setApiKey] = useState<string>("");
  const [savedKey, setSavedKey] = useState<string>("");
  const { toast } = useToast();

  // Load saved API key from localStorage on component mount
  useEffect(() => {
    const storedKey = localStorage.getItem("elevenLabsApiKey");
    if (storedKey) {
      setSavedKey(storedKey);
      onKeySubmit(storedKey);
    }
  }, [onKeySubmit]);

  const handleSaveKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your ElevenLabs API key.",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage
    localStorage.setItem("elevenLabsApiKey", apiKey);
    setSavedKey(apiKey);
    onKeySubmit(apiKey);

    toast({
      title: "API Key Saved",
      description: "Your ElevenLabs API key has been saved.",
    });

    // Clear input
    setApiKey("");
  };

  const handleRemoveKey = () => {
    // Remove from localStorage
    localStorage.removeItem("elevenLabsApiKey");
    setSavedKey("");
    
    toast({
      title: "API Key Removed",
      description: "Your ElevenLabs API key has been removed.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ElevenLabs Text-to-Speech</CardTitle>
        <CardDescription>
          Enter your ElevenLabs API key to enable voice capabilities for the AI interviewer.
          {!savedKey && " The key will be stored in your browser's local storage."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!savedKey ? (
          <div className="flex flex-col space-y-4">
            <Input
              type="password"
              placeholder="Enter your ElevenLabs API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div className="text-sm text-muted-foreground">
              You can get an API key from{" "}
              <a 
                href="https://elevenlabs.io/app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-auditor-500 hover:underline"
              >
                ElevenLabs
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-2">
            <p className="text-sm">API key: •••••••••••••••••••••••{savedKey.slice(-4)}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {!savedKey ? (
          <Button onClick={handleSaveKey}>
            Save API Key
          </Button>
        ) : (
          <Button variant="outline" onClick={handleRemoveKey}>
            Remove API Key
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ElevenLabsApiKey;
