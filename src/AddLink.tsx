import React, { useEffect, useState } from 'react';
import { initDatabase, addLink, getLinks } from './linkDb';

interface Link {
  id?: number;
  title: string;
  url: string;
  description: string;
  tags: string;
}

const AddLink: React.FC = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    (async () => {
      await initDatabase();
      setLinks(getLinks());
    })();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLink(title, url, description, tags);
    setLinks(getLinks());

    // Clear fields
    setTitle('');
    setUrl('');
    setDescription('');
    setTags('');
  };

  return (
    <div>
      <h2>Add Link</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="text" placeholder="Tags" value={tags} onChange={e => setTags(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <h3>Saved Links</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <strong>{link.title}</strong> - {link.url}<br />
            {link.description} | Tags: {link.tags}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddLink;
