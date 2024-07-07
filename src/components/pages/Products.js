import React, { useState } from 'react';
import '../../App.css';
import './Products.css';
import { Button } from '../Button';
import FacetedSearch from '../FacetedSearch';
import SearchResults from '../SearchResults';
import Sidebar from '../Sidebar';

const mockData = [
  { id: 1, name: 'Power Skating', description: 'Improve your speed, agility, and efficiency on the ice with advanced power skating techniques and drills.', price: 120, category: 'Power Skating' },
  { id: 2, name: 'Stickhandling Mastery', description: 'Enhance your puck control with exercises designed to increase your stickhandling speed, accuracy, and creativity.', price: 100, category: 'Stickhandling Mastery' },
  { id: 3, name: 'Defensive Strategies', description: 'Learn effective defensive techniques and positioning to improve your overall game and prevent scoring opportunities.', price: 110, category: 'Defensive Strategies' },
  { id: 4, name: 'Goalie Training', description: 'Develop your goaltending skills with specialized training focused on reflexes, positioning, and save techniques.', price: 130, category: 'Goalie Training' },
  { id: 5, name: 'Shooting Accuracy', description: 'Improve your shooting accuracy and power with targeted drills and expert coaching.', price: 115, category: 'Shooting Accuracy' },
];

const Products = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="products-container">
      <h1 className="programs-offered">Programs Offered</h1>
      <button className="open-sidebar-btn" onClick={toggleSidebar}>Filter</button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}>
        <FacetedSearch filters={filters} onFilterChange={handleFilterChange} />
      </Sidebar>
      <div className="products">
        <SearchResults filters={filters} data={mockData} />
      </div>
    </div>
  );
};

export default Products;
