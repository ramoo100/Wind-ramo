import React, { useState } from "react";
import ComponentCard from "./ComponentCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
}

interface ComponentGridProps {
  components?: Component[];
  onComponentSelect?: (component: Component) => void;
}

const ComponentGrid = ({
  components = [
    {
      id: "1",
      name: "Button",
      category: "Basic",
      description:
        "A versatile button component with multiple variants and states.",
    },
    {
      id: "2",
      name: "Card",
      category: "Layout",
      description:
        "A container component for displaying content in a card format.",
    },
    {
      id: "3",
      name: "Dialog",
      category: "Overlay",
      description: "A modal dialog component for displaying important content.",
    },
    {
      id: "4",
      name: "Input",
      category: "Form",
      description: "A text input component for collecting user input.",
    },
  ],
  onComponentSelect = () => {},
}: ComponentGridProps) => {
  return (
    <div className="w-full h-full bg-background p-6">
      <ScrollArea className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {components.map((component) => (
            <ComponentCard
              key={component.id}
              name={component.name}
              category={component.category}
              description={component.description}
              onView={() => onComponentSelect(component)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ComponentGrid;
