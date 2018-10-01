// extracted from web maker, a great source of inspiration for this tool
// https://github.com/chinchang/web-maker/blob/master/src/utils.js

const esprima = require('esprima');

export function addInfiniteLoopProtection(code, timeout) {
	var loopId = 1;
	var patches = [];
	var varPrefix = '_wmloopvar';
	var varStr = 'var %d = Date.now();\n';
	var checkStr = `\nif (Date.now() - %d > ${timeout}) { break;}\n`;

    var parse = function(node) {
        switch (node.type) {
            case 'DoWhileStatement':
            case 'ForStatement':
            case 'ForInStatement':
            case 'ForOfStatement':
            case 'WhileStatement':
                var start = 1 + node.body.range[0];
                var end = node.body.range[1];
                var prolog = checkStr.replace('%d', varPrefix + loopId);
                var epilog = '';

                if (node.body.type !== 'BlockStatement') {
                    // `while(1) doThat()` becomes `while(1) {doThat()}`
                    prolog = '{' + prolog;
                    epilog = '}';
                    --start;
                }

                patches.push({
                    pos: start,
                    str: prolog
                });
                patches.push({
                    pos: end,
                    str: epilog
                });
                patches.push({
                    pos: node.range[0],
                    str: varStr.replace('%d', varPrefix + loopId)
                });
                ++loopId;
                break;

            default:
                break;
        }
    };

    try {
        esprima.parse(code, {tolerant: true,range: true,jsx: true}, parse);

        patches
		.sort(function(a, b) {
			return b.pos - a.pos;
		})
		.forEach(function(patch) {
			code = code.slice(0, patch.pos) + patch.str + code.slice(patch.pos);
		});
    } catch(err) {}

	return code;
}