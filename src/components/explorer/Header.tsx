import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Sun, Search } from "lucide-react";

interface HeaderProps {
  onSearch?: (term: string) => void;
  onCategoryChange?: (category: string) => void;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const Header = ({
  onSearch = () => {},
  onCategoryChange = () => {},
  onThemeToggle = () => {},
  isDarkMode = false,
}: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { label: "All Components", value: "all" },
    { label: "Basic", value: "basic" },
    { label: "Forms", value: "forms" },
    { label: "Navigation", value: "navigation" },
    { label: "Overlays", value: "overlays" },
    { label: "Data Display", value: "data-display" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="w-full h-16 bg-background border-b px-4 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 max-w-3xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search components..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <Select onValueChange={onCategoryChange} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onThemeToggle}
          className="h-9 w-9"
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
