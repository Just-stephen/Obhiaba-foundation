const fs = require('fs');
const path = require('path');

const imagesPath = 'c:\\Users\\user\\Desktop\\Large\\large\\public\\images';
const seasons = [1, 2, 3, 4, 5, 6, 7];
const categories = {};

seasons.forEach(season => {
  const seasonPath = path.join(imagesPath, `season ${season}`);
  const files = fs.readdirSync(seasonPath)
    .filter(f => fs.statSync(path.join(seasonPath, f)).isFile())
    .sort();
  
  const imageArray = files.map(f => `'/images/season ${season}/${f}'`);
  categories[`Season ${season}`] = imageArray;
});

// Output as JavaScript object
console.log('const categories = {');
const categoryKeys = Object.keys(categories);
categoryKeys.forEach((key, idx) => {
  const images = categories[key];
  console.log(`  '${key}': [`);
  images.forEach((img, i) => {
    const comma = i < images.length - 1 ? ',' : '';
    console.log(`    ${img}${comma}`);
  });
  const comma = idx < categoryKeys.length - 1 ? ',' : '';
  console.log(`  ]${comma}`);
});
console.log('};');
