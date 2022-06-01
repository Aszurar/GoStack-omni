import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Repository } from '../pages/Repository';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repositories/:repository" element={<Repository />} />
    </Router>
  );
}
