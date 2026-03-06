#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define source and destination directories
const srcDir = './';
const destDir = './public';

// Create public directory if it doesn't exist
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created public directory');
}

// Copy specified files from source to destination
function copyFiles(srcDir, destDir) {
    const files = ['index.html'];
    
    files.forEach(file => {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, file);
        
        if (fs.existsSync(srcPath)) {
            const content = fs.readFileSync(srcPath, 'utf8');
            fs.writeFileSync(destPath, content);
            console.log(`Copied ${file} to public folder`);
        } else {
            console.warn(`${file} not found in source directory`);
        }
    });

    // Create 404.html in public directory if not exists
    const notFoundPath = path.join(destDir, '404.html');
    if (!fs.existsSync(notFoundPath)) {
        const notFoundContent = fs.readFileSync(path.join(srcDir, 'public', '404.html'), 'utf8');
        fs.writeFileSync(notFoundPath, notFoundContent);
        console.log('Created 404.html in public folder');
    }

    // Copy _headers and _redirects if they exist
    const headersFile = path.join(srcDir, 'public', '_headers');
    const redirectsFile = path.join(srcDir, 'public', '_redirects');
    
    if (fs.existsSync(headersFile)) {
        const headersContent = fs.readFileSync(headersFile, 'utf8');
        const newHeadersPath = path.join(destDir, '_headers');
        fs.writeFileSync(newHeadersPath, headersContent);
        console.log('Copied _headers to public folder');
    }
    
    if (fs.existsSync(redirectsFile)) {
        const redirectsContent = fs.readFileSync(redirectsFile, 'utf8');
        const newRedirectsPath = path.join(destDir, '_redirects');
        fs.writeFileSync(newRedirectsPath, redirectsContent);
        console.log('Copied _redirects to public folder');
    }
}

try {
    copyFiles(srcDir, destDir);
    console.log('\nBuild completed successfully!');
    console.log('Files copied to public folder and ready for deployment');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}