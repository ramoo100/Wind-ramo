import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings2, Maximize2, Minimize2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PreviewPanelProps {
  component?: React.ReactNode;
  onToggleFullscreen?: () => void;
  isFullscreen?: boolean;
}

const PreviewPanel = ({
  component = (
    <div className="p-4 text-center text-gray-500">
      Select a component to preview
    </div>
  ),
  onToggleFullscreen = () => {},
  isFullscreen = false,
}: PreviewPanelProps) => {
  const [background, setBackground] = useState<string>("bg-white");
  const [pattern, setPattern] = useState<string>("none");

  const backgroundOptions = [
    { label: "White", value: "bg-white" },
    { label: "Light Gray", value: "bg-gray-100" },
    { label: "Dark", value: "bg-gray-900" },
    { label: "Primary", value: "bg-primary" },
  ];

  const patternOptions = [
    { label: "None", value: "none" },
    { label: "Dots", value: "bg-dots" },
    { label: "Grid", value: "bg-grid" },
  ];

  return (
    <div className="w-full h-full bg-background p-4">
      <Card className="w-full h-full overflow-hidden">
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex gap-2">
            {backgroundOptions.map((option) => (
              <Button
                key={option.value}
                variant={background === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setBackground(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => {}}>
                    <Settings2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configure preview</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggleFullscreen}
                  >
                    {isFullscreen ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div
          className={`w-full h-[calc(100%-48px)] ${background} ${pattern} flex items-center justify-center p-8 overflow-auto`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {component}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PreviewPanel;
