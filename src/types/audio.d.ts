
// Basic type definitions for Web Audio API
interface AudioBuffer {
  duration: number;
  length: number;
  sampleRate: number;
  numberOfChannels: number;
}

interface AudioBufferSourceNode extends AudioNode {
  buffer: AudioBuffer | null;
  start(when?: number, offset?: number, duration?: number): void;
  stop(when?: number): void;
  onended: ((this: AudioBufferSourceNode, ev: Event) => any) | null;
}

interface AudioNode {
  connect(destination: AudioNode | AudioParam, output?: number, input?: number): AudioNode;
  disconnect(destination?: AudioNode | AudioParam, output?: number, input?: number): void;
  context: AudioContext;
}

interface AudioParam {
  value: number;
  setValueAtTime(value: number, startTime: number): AudioParam;
}

interface AudioContext {
  currentTime: number;
  destination: AudioNode;
  sampleRate: number;
  state: string;
  createBufferSource(): AudioBufferSourceNode;
  createGain(): GainNode;
  decodeAudioData(audioData: ArrayBuffer): Promise<AudioBuffer>;
  resume(): Promise<void>;
  suspend(): Promise<void>;
  close(): Promise<void>;
}

interface GainNode extends AudioNode {
  gain: AudioParam;
}

interface Window {
  AudioContext: {
    new(): AudioContext;
  };
  webkitAudioContext: {
    new(): AudioContext;
  };
}
