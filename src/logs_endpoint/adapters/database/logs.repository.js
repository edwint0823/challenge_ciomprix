const fs = require('fs');
const path = require('path');
const getLastTenMessages = async () => {
    const logFilePath = path.join(__dirname, '../', '../', '../', '../', 'log', 'access.log');
    return await new Promise((resolve, reject) => {
        fs.readFile(logFilePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const lines = data.split('\n');
            const lastLines = lines.slice(-10);
            resolve(lastLines);
        });
    })
}

module.exports = {
    getLastTenMessages
}