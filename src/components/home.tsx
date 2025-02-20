import React, { useState } from "react";
import Header from "./explorer/Header";
import ComponentGrid from "./explorer/ComponentGrid";
import ComponentDetail from "./explorer/ComponentDetail";

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(
    null,
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would update the theme in your theme provider
  };

  const handleComponentSelect = (component: Component) => {
    setSelectedComponent(component);
  };

  const handleCloseDetail = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="w-full h-screen bg-background flex flex-col overflow-hidden">
      <Header
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onThemeToggle={handleThemeToggle}
        isDarkMode={isDarkMode}
      />

      <div className="flex-1 overflow-hidden">
        <ComponentGrid onComponentSelect={handleComponentSelect} />
      </div>

      {selectedComponent && (
        <ComponentDetail
          isOpen={true}
          onClose={handleCloseDetail}
          componentName={selectedComponent.name}
          componentCode={`// Example code for ${selectedComponent.name}
export const ${selectedComponent.name} = () => {
  return (
    <div>Example implementation of ${selectedComponent.name}</div>
  );
};`}
        />
      )}
    </div>
  );
};

export default Home;
