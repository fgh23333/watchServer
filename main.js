const chokidar = require('chokidar');
const fs = require('fs').promises;

const jsonFilePath = `${__dirname}/json/data.json`;

const handleFileChange = async () => {
    try {
        console.log(`File ${jsonFilePath} has been changed.`);

        const data = await fs.readFile(jsonFilePath, 'utf8');

        const jsonData = JSON.parse(data);
        console.log('File content:', jsonData);
    } catch (error) {
        console.error(`Error handling file change: ${error}`);
    }
};

const watcher = chokidar.watch(jsonFilePath);

watcher.on('change', handleFileChange);

console.log(`Now watching ${jsonFilePath} for changes...`);
