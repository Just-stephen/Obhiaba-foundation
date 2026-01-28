const fs = require('fs');
const path = require('path');

const imagesPath = 'public/images';
const seasons = [1, 2, 3, 4, 5, 6, 7];
const categories = {};

seasons.forEach(season => {
  const seasonPath = path.join(imagesPath, `season ${season}`);
  
  try {
    const files = fs.readdirSync(seasonPath)
      .filter(f => {
        const fullPath = path.join(seasonPath, f);
        return fs.statSync(fullPath).isFile();
      })
      .sort();
    
    // Separate banner images and others
    const bannerImages = files.filter(f => f.toLowerCase().includes('banner'));
    const otherImages = files.filter(f => !f.toLowerCase().includes('banner'));
    
    // Combine: banners first, then others
    const sortedFiles = [...bannerImages, ...otherImages];
    
    const imageArray = sortedFiles.map(f => `'/images/season ${season}/${f}'`);
    categories[`Season ${season}`] = imageArray;
    
    console.log(`Season ${season}: ${files.length} files (${bannerImages.length} banners)`);
  } catch (err) {
    console.error(`Error reading season ${season}:`, err.message);
  }
});

// Generate the JSX code
let jsxCode = `import React, { useState } from 'react';

const categories = {
`;

Object.entries(categories).forEach(([key, images], idx) => {
  jsxCode += `  '${key}': [\n`;
  images.forEach((img, i) => {
    const comma = i < images.length - 1 ? ',' : '';
    jsxCode += `    ${img}${comma}\n`;
  });
  const comma = idx < Object.keys(categories).length - 1 ? ',' : '';
  jsxCode += `  ]${comma}\n`;
});

jsxCode += `};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Season 1');

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Gallery</h2>
      
      <div className="mb-5 d-flex justify-content-center flex-wrap gap-2">
        {Object.keys(categories).map(category => (
          <button
            key={category}
            className={\`btn btn-lg \${activeCategory === category ? 'btn-primary' : 'btn-outline-secondary'}\`}
            onClick={() => setActiveCategory(category)}
            style={{
              borderRadius: '25px',
              fontWeight: activeCategory === category ? '600' : '500',
              padding: '0.5rem 1.5rem',
              transition: 'all 0.3s ease',
              boxShadow: activeCategory === category ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {activeCategory === 'Season 5' && (
        <div className="alert alert-info mb-4" style={{ textAlign: 'center', fontSize: '1.1rem', borderRadius: '10px' }}>
          <h5 style={{ marginBottom: '0.5rem' }}>Impact Story</h5>
          <p style={{ marginBottom: 0 }}>
            Over <strong>85 widows</strong> were empowered through this initiative, providing them with support, resources, and hope for a better future.
          </p>
        </div>
      )}

      <div className="row mt-4 g-3">
        {categories[activeCategory].map((src, i) => (
          <div key={i} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm" style={{ overflow: 'hidden', borderRadius: '10px', border: 'none', backgroundColor: '#f5f5f5' }}>
              <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={src} 
                  alt={\`\${activeCategory}-\${i}\`} 
                  className="img-fluid" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

// Write to file
fs.writeFileSync('src/pages/Gallery.jsx', jsxCode);
console.log('\n✅ Gallery.jsx regenerated with existing images only');
console.log('Banner images placed first in each season category');
