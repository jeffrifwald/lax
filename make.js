/* jshint node:true */
'use strict';

var fs = require('fs');
var rm = require('rimraf');


function jsFiles(file) {
    return file.slice(-3) === '.js';
}

function src(path) {
    fs.readdir(path, function(err, files) {
        files.filter(jsFiles).forEach(function(file) {
            fs.readFile(path + '/' + file, {encoding: 'utf-8'}, function(err, content) {
                fs.writeFile(file, content, {encoding: 'utf-8'});
            });
        });
    });
}

function index(path) {
    var indexImports = [];
    var indexExports = [];
    var indexSrc = '';

    fs.readdir(path, function(err, files) {
        files.filter(jsFiles).forEach(function(file) {
            var varName = file.replace('.js', '');

            indexImports.push(
                'import ' + varName + ' from ' + '\'./' + file + '\';'
            );
            indexExports.push('\t' + varName);
        });

        indexSrc =
            indexImports.join('\n') + '\n' + '\n' + '\n' +
            'export default {\n' + indexExports.join(',\n') + '\n};\n';

        fs.writeFile('index.js', indexSrc, {encoding: 'utf-8'});
    });
}

function clean(path) {
    fs.readdir(path, function(err, files) {
        files.filter(jsFiles).filter(function(file) {
            return file !== 'make.js';
        }).forEach(function(file) {
            rm(file, function() {});
        });
    });

    rm('.coverage', function() {});
}

if (process.argv[2] === 'src') {
    src('src');
} else if (process.argv[2] === 'index') {
    index('src');
} else if (process.argv[2] === 'clean') {
    clean('.');
}
