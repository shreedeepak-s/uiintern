// designSetup.js
const fs = require('fs');

const files = [
  "01-user-research.md",
  "02-user-personas.md",
  "03-user-flows.md",
  "04-wireframes.md",
  "05-design-thinking.md"
];

files.forEach(file => {
  fs.writeFileSync(file, `# ${file.replace('.md','').replace('-',' ')}`, 'utf8');
});

console.log("Design documentation files created!");
