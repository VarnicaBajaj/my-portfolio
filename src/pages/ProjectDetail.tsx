import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to projects page since we're using modal now
    navigate('/projects', { replace: true });
  }, [navigate]);
  
  return null;
};

export default ProjectDetail;