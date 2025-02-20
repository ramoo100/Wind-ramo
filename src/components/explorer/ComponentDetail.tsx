import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import PreviewPanel from "./PreviewPanel";
import PropsPanel from "./PropsPanel";
import CodePanel from "./CodePanel";

interface ComponentDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  component?: React.ReactNode;
  componentName?: string;
  componentCode?: string;
}

const ComponentDetail = ({
  isOpen = true,
  onClose = () => {},
  component = <div className="p-4 border rounded">Example Component</div>,
  componentName = "ExampleComponent",
  componentCode = `const ExampleComponent = () => {\n  return <div>Example Component</div>;\n};`,
}: ComponentDetailProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [componentProps, setComponentProps] = useState({});

  const handlePropsChange = (newProps: Record<string, any>) => {
    setComponentProps(newProps);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-[95vw] h-[95vh] p-0">
        <div className="flex h-full">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold">{componentName}</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-hidden">
              <PreviewPanel
                component={component}
                isFullscreen={isFullscreen}
                onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
              />
            </div>

            <div className="h-[382px] border-t">
              <CodePanel code={componentCode} language="tsx" />
            </div>
          </div>

          <PropsPanel
            componentProps={componentProps}
            onPropsChange={handlePropsChange}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentDetail;
