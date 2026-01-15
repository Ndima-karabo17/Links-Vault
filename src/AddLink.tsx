import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const AddLink: React.FC = () => {
  const navigate = useNavigate();
  

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

  
    const newLink = {
      id: Date.now(), 
      title,
      url,
      description,
      tag: tag || 'General' 
    };

   
    const existingLinks = JSON.parse(localStorage.getItem('userLinks') || '[]');
    const updatedLinks = [...existingLinks, newLink];
    localStorage.setItem('userLinks', JSON.stringify(updatedLinks));

   
    setShowSuccess(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/link-view');
    }, 1500);
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          DigitalSpace
        </div>
        <div className="nav-actions">
          <button className="nav-item" onClick={() => navigate('/link-view')}>View All Links</button>
          <button className="logout-btn" onClick={() => navigate('/signin')}>Logout</button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="auth-card add-link-card">
          
          <button className="back-link" onClick={() => navigate('/link-view')}>
            ← Back to Links
          </button>

          <h1 className="auth-heading">Add New Connection</h1>
          <p className="auth-subheading">Organize your digital life by adding a new URL below.</p>

          <form className="auth-form" onSubmit={handleAddLink}>
            <div className="input-group">
              <label>Title</label>
              <input 
                type="text" 
                placeholder="e.g. My GitHub Profile" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <label>Link (URL)</label>
              <input 
                type="url" 
                placeholder="https://github.com/yourname" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <label>Description</label>
              <input 
                type="text" 
                placeholder="Briefly describe this link" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required 
              />
            </div>

            <div className="input-group">
              <label>Tag <span>(Optional)</span></label>
              <input 
                type="text" 
                placeholder="e.g. Work, Social, Hobby" 
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>

            {showSuccess && (
              <div className="success-box">
                Successfully added! Redirecting...
              </div>
            )}

            <button 
              type="submit" 
              className="auth-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Add to Collection'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLink;
