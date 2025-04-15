
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type ThemeColor = 'blue' | 'cream' | 'peach' | 'lavender' | 'mint' | 'pink';

const sampleText = `Reading can be challenging for people with dyslexia. This tool helps by highlighting words in sequence, allowing your eyes to follow along with ease. You can adjust the speed and color to find what works best for you. This makes reading more comfortable and helps improve focus and comprehension.`;

const ReadFlowDemo: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1); // words per second
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Split text into words
    const wordsArray = sampleText.split(/\s+/).filter(word => word.length > 0);
    setWords(wordsArray);
  }, []);

  useEffect(() => {
    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      
      // Start interval
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex >= words.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prevIndex + 1;
        });
      }, 1000 / speed);
    } else {
      // Stop interval
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, speed, words.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  const moveForward = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const moveBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getColorClass = (word: string, index: number) => {
    if (index === currentIndex) {
      return `bg-readflow-${themeColor} text-readflow-dark p-1 rounded-md transform transition-all duration-300 scale-105`;
    }
    return 'bg-transparent dark:text-white transition-all duration-300';
  };

  return (
    <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg border border-gray-200 max-w-2xl mx-auto animate-fade-in">
      <div className="mb-8 p-4 bg-white rounded-lg shadow-inner min-h-[200px]">
        <div className="dyslexic-text text-xl leading-relaxed">
          {words.map((word, index) => (
            <span
              key={index}
              className={`word-container ${getColorClass(word, index)} ${index === currentIndex ? 'animate-focus' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Button 
              variant="outline"
              size="icon"
              onClick={moveBackward}
              disabled={currentIndex === 0}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="default"
              onClick={togglePlayPause}
              className={`w-24 ${isPlaying ? 'bg-readflow-dark' : 'bg-readflow-blue'}`}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4 mr-2" /> Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" /> Play
                </>
              )}
            </Button>
            
            <Button 
              variant="outline"
              size="icon"
              onClick={moveForward}
              disabled={currentIndex === words.length - 1}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
          
          <Button 
            variant="ghost"
            size="sm"
            onClick={resetDemo}
          >
            Reset
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium leading-none">Settings</h4>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label>Speed: {speed.toFixed(1)} words/sec</Label>
                    <Slider 
                      value={[speed]} 
                      min={0.5} 
                      max={3} 
                      step={0.1} 
                      onValueChange={(value) => setSpeed(value[0])} 
                    />
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <Label>Highlight Color</Label>
                    <RadioGroup 
                      defaultValue={themeColor}
                      onValueChange={(value) => setThemeColor(value as ThemeColor)}
                    >
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="blue" id="blue" className="border-readflow-blue bg-readflow-blue text-white" />
                          <Label htmlFor="blue">Blue</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cream" id="cream" className="border-readflow-cream bg-readflow-cream" />
                          <Label htmlFor="cream">Cream</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="peach" id="peach" className="border-readflow-peach bg-readflow-peach" />
                          <Label htmlFor="peach">Peach</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="lavender" id="lavender" className="border-readflow-lavender bg-readflow-lavender" />
                          <Label htmlFor="lavender">Lavender</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mint" id="mint" className="border-readflow-mint bg-readflow-mint" />
                          <Label htmlFor="mint">Mint</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pink" id="pink" className="border-readflow-pink bg-readflow-pink" />
                          <Label htmlFor="pink">Pink</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ReadFlowDemo;
