import { visit } from 'unist-util-visit';
import findMatch from '../../lingoe.js'
import dictionary from '../../dictionary.json'

const plugin = (options) => {
    const transformer = async (ast) => {
        visit(ast, 'inlineCode', (node) => {
            node.type = 'link';
            node.title = dictionary[findMatch(node.value)];
            node.url = '#'+node.title.replace(/[\s\u200c]/g, '_')
            node.children = [{type: 'text', value: node.value}]
        });
    };
    return transformer;
};

export default plugin;