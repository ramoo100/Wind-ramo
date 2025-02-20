import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ComponentCardProps {
  name?: string;
  category?: string;
  description?: string;
  onView?: () => void;
}

const ComponentCard = ({
  name = "Button",
  category = "Basic",
  description = "A versatile button component with multiple variants and states.",
  onView = () => {},
}: ComponentCardProps) => {
  return (
    <Card className="w-[360px] h-[280px] bg-background hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-32 bg-muted rounded-md flex items-center justify-center">
          {/* Preview area - would normally contain a live preview of the component */}
          <div className="text-muted-foreground text-sm">Preview</div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onView} variant="outline" className="w-full">
          <Eye className="w-4 h-4 mr-2" />
          View Component
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComponentCard;
