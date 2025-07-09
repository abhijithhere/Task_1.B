const fs = require('fs');
const path = require('path');

const filePath = './src/data/medicalImages.ts';

let content = fs.readFileSync(filePath, 'utf8');

let imageCounter = 1;
content = content.replace(/thumbnailUrl: 'https:\/\/images\.unsplash\.com\/[^']+'/g, () => {
  return `thumbnailUrl: '/images/medical/image-${imageCounter}-thumb.jpg'`;
});

content = content.replace(/fullUrl: 'https:\/\/images\.unsplash\.com\/[^']+'/g, () => {
  const currentCounter = imageCounter;
  imageCounter++;
  return `fullUrl: '/images/medical/image-${currentCounter}-full.jpg'`;
});

fs.writeFileSync(filePath, content);

console.log(`✅ Replaced all Unsplash URLs with local image paths`);
console.log(`📁 You need to add ${imageCounter - 1} images to public/images/medical/`);
console.log(`📝 Image naming pattern: image-1-thumb.jpg, image-1-full.jpg, image-2-thumb.jpg, image-2-full.jpg, etc.`);
