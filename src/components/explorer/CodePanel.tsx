import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CodePanelProps {
  code?: string;
  language?: string;
  onCopy?: () => void;
}

const CodePanel = ({
  code = "const MyComponent = () => {\n  return <div>Hello World</div>;\n};",
  language = "tsx",
  onCopy = () => console.log("Copy clicked"),
}: CodePanelProps) => {
  return (
    <Card className="w-full h-[382px] bg-background border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Code Preview</span>
          <span className="text-xs text-muted-foreground">{language}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={onCopy}
        >
          <Copy className="h-4 w-4" />
          Copy
        </Button>
      </div>
      <ScrollArea className="h-[calc(382px-64px)] w-full">
        <pre className="p-4 text-sm font-mono">
          <code>{code}</code>
        </pre>
      </ScrollArea>
    </Card>
  );
};

export default CodePanel;
