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
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<LinkItem | null>(null);

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('userLinks') || '[]');
    setLinks(savedLinks);
  }, []);

  const filteredLinks = links.filter(link => 
    link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const confirmDelete = () => {
    if (deleteId !== null) {
      const updatedLinks = links.filter(link => link.id !== deleteId);
      saveAndRefresh(updatedLinks);
      setDeleteId(null);
    }
  };

  const startEditing = (link: LinkItem) => {
    setEditingId(link.id);
    setEditFormData({ ...link });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditFormData(null);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [e.target.name]: e.target.value
      });
    }
  };

  const saveEdit = () => {
    if (editFormData) {
      const updatedLinks = links.map(link => 
        link.id === editFormData.id ? editFormData : link
      );
      saveAndRefresh(updatedLinks);
      cancelEdit();
    }
  };

  const saveAndRefresh = (updatedLinks: LinkItem[]) => {
    setLinks(updatedLinks);
    localStorage.setItem('userLinks', JSON.stringify(updatedLinks));
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Links Vault
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
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search by title or tag..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <p>Showing {filteredLinks.length} of {links.length} links.</p>
        </header>

        {filteredLinks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No matches found</h3>
            <p>Try adjusting your search or add a new link.</p>
          </div>
        ) : (
          <div className="links-grid">
            {filteredLinks.map((link) => (
              <div key={link.id} className={`link-card ${editingId === link.id ? 'editing' : ''}`}>
                {editingId === link.id ? (
                  <div className="edit-form-inline">
                    <div className="input-group">
                      <label>Title</label>
                      <input name="title" value={editFormData?.title} onChange={handleEditChange} />
                    </div>
                    <div className="input-group">
                      <label>URL</label>
                      <input name="url" value={editFormData?.url} onChange={handleEditChange} />
                    </div>
                    <div className="input-group">
                      <label>Description</label>
                      <textarea name="description" value={editFormData?.description} onChange={handleEditChange} />
                    </div>
                    <div className="input-group">
                      <label>Tag</label>
                      <input name="tag" value={editFormData?.tag} onChange={handleEditChange} />
                    </div>
                    <div className="edit-actions">
                      <button className="save-btn" onClick={saveEdit}>Save Changes</button>
                      <button className="cancel-link-btn" onClick={cancelEdit}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="link-info">
                      <div className="link-header">
                        <span className="link-tag">{link.tag}</span>
                        <button 
                          className="delete-icon-btn" 
                          onClick={() => setDeleteId(link.id)}
                        >
                          &times;
                        </button>
                      </div>
                      <h3>{link.title}</h3>
                      <p>{link.description}</p>
                      <span className="url-display">
                        {link.url.replace(/(^\w+:|^)\/\//, '')}
                      </span>
                    </div>
                    <div className="link-footer">
                      <button className="edit-btn" onClick={() => startEditing(link)}>
                        Edit Details
                      </button>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
                        Visit Site ↗
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {deleteId !== null && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-warning-icon">⚠️</div>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this link?</p>
            <div className="modal-buttons">
              <button className="btn-cancel" onClick={() => setDeleteId(null)}>Cancel</button>
              <button className="btn-confirm" onClick={confirmDelete}>Delete Forever</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkView;
