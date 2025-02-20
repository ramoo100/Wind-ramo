import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PropsPanelProps {
  componentProps?: Record<string, any>;
  onPropsChange?: (props: Record<string, any>) => void;
}

const PropsPanel = ({
  componentProps = {
    text: "Sample Text",
    isEnabled: true,
    size: "medium",
    opacity: 100,
    variant: "default",
  },
  onPropsChange = () => {},
}: PropsPanelProps) => {
  const [props, setProps] = useState(componentProps);

  const handlePropChange = (key: string, value: any) => {
    const newProps = { ...props, [key]: value };
    setProps(newProps);
    onPropsChange(newProps);
  };

  return (
    <Card className="w-[400px] h-full bg-background border-l rounded-none p-4 overflow-hidden flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Properties</h2>
        <p className="text-sm text-muted-foreground">
          Customize component properties
        </p>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-6">
          {/* Text Input Example */}
          <div className="space-y-2">
            <Label htmlFor="text-prop">Text</Label>
            <Input
              id="text-prop"
              value={props.text}
              onChange={(e) => handlePropChange("text", e.target.value)}
            />
          </div>

          {/* Boolean Switch Example */}
          <div className="flex items-center justify-between">
            <Label htmlFor="enabled-prop">Enabled</Label>
            <Switch
              id="enabled-prop"
              checked={props.isEnabled}
              onCheckedChange={(checked) =>
                handlePropChange("isEnabled", checked)
              }
            />
          </div>

          {/* Select Example */}
          <div className="space-y-2">
            <Label>Size</Label>
            <Select
              value={props.size}
              onValueChange={(value) => handlePropChange("size", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Slider Example */}
          <div className="space-y-2">
            <Label>Opacity</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[props.opacity]}
              onValueChange={(value) => handlePropChange("opacity", value[0])}
            />
          </div>

          {/* Variant Select Example */}
          <div className="space-y-2">
            <Label>Variant</Label>
            <Select
              value={props.variant}
              onValueChange={(value) => handlePropChange("variant", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="primary">Primary</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="destructive">Destructive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
};

export default PropsPanel;
