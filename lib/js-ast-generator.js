// Innotrade Enapso
// (C) Copyright 2019 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// Code Generator für JS AST
// here we can generate new JS Code based on JS ASTs

const
	fs = require('fs'),
	escodegen = require('escodegen');

async function ast2Code(ast, options) {
	if (options && options.comment) {
		ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
	}
	let code = escodegen.generate(ast, options);
	return code;
}

async function ast2File(ast, options, filename) {
	let code = await this.ast2Code(ast, options);
	return fs.promises.writeFile(filename, code);
}

module.exports = {
	ast2Code,
	ast2File
}