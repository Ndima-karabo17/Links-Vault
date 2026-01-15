import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

interface LinkItem {
  id: number;
  title: string;
  url: string;
  description: string;
  tag: string;
}

const LinkView: React.FC = () => {
  const navigate = useNavigate();
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Load links from localStorage on component mount
  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('userLinks') || '[]');
    setLinks(savedLinks);
  }, []);

  // Handle Deletion
  const confirmDelete = () => {
    if (deleteId !== null) {
      const updatedLinks = links.filter(link => link.id !== deleteId);
      setLinks(updatedLinks);
      localStorage.setItem('userLinks', JSON.stringify(updatedLinks));
      setDeleteId(null);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Dashboard Header/Nav */}
      <nav className="dashboard-nav">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          DigitalSpace
        </div>
        <div className="nav-actions">
          <button className="btn-primary" onClick={() => navigate('/add-link')}>
            + Add New Link
          </button>
          <button className="logout-btn" onClick={() => navigate('/signin')}>
            Logout
          </button>
        </div>
      </nav>

      <div className="view-content">
        <header className="view-header">
          <h1>Your Saved Connections</h1>
          <p>You have {links.length} link{links.length !== 1 ? 's' : ''} saved in your library.</p>
        </header>

        {links.length === 0 ? (
          /* Empty State */
          <div className="empty-state">
            <div className="empty-icon">📂</div>
            <h3>No links found</h3>
            <p>Your collection is empty. Start by adding your first favorite connection.</p>
            <button className="btn-primary-lg" onClick={() => navigate('/add-link')}>
              Create First Link
            </button>
          </div>
        ) : (
          /* Links Grid */
          <div className="links-grid">
            {links.map((link) => (
              <div key={link.id} className="link-card">
                <div className="link-info">
                  <div className="link-header">
                    <span className="link-tag">{link.tag}</span>
                    <button 
                      className="delete-icon-btn" 
                      onClick={() => setDeleteId(link.id)}
                      title="Delete Link"
                    >
                      &times;
                    </button>
                  </div>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="url-display"
                  >
                    {link.url.replace(/(^\w+:|^)\/\//, '')} {/* Removes https:// for cleaner look */}
                  </a>
                </div>
                <div className="link-footer">
                  <button className="edit-btn">Edit Details</button>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="visit-btn"
                  >
                    Visit Site ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {deleteId !== null && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-warning-icon">⚠️</div>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this link? This action cannot be undone.</p>
            <div className="modal-buttons">
              <button className="btn-cancel" onClick={() => setDeleteId(null)}>
                Cancel
              </button>
              <button className="btn-confirm" onClick={confirmDelete}>
                Delete Forever
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkView;