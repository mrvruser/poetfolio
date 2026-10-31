const fs = require('fs');
let s = fs.readFileSync('data/certifides.ts', 'utf8');
s = s.replace(/"id":\s*"CONT-062",[\s\S]*?"hasPdf":\s*false,/, `"id": "CONT-062",
    "postId": "LI-POST-062",
    "title": "A Major Milestone in My Data Science Journey | NPTEL Domain Certification",
    "issuer": "SWAYAM-NPTEL (IIT Madras, IIT Roorkee, IISc, IIT Bombay, IIT Delhi)",
    "score": "Domain Certified (415 Total Marks | Discipline Star & Believer)",
    "date": "2026-08-27T08:58:27.620Z",
    "description": "Successfully completed the SWAYAM-NPTEL Domain Certification in Data Science (Computer Science), completing 3 Core Courses and 3 Elective Courses across IIT Madras, IIT Roorkee, IISc Bangalore, IIT Bombay, and IIT Delhi. Recognised as NPTEL Discipline Star in Data Science and NPTEL Believer.",
    "pdfUrl": null,
    "thumbnailUrl": "/portfolio_assets/gallery/LI-POST-062_LI-POST-062_img_01.jpg",
    "hasPdf": false,`);
fs.writeFileSync('data/certifides.ts', s, 'utf8');
console.log('CONT-062 updated successfully');
