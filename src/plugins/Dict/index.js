import { visit } from 'unist-util-visit';
import findMatch from './lingoe.js'

const plugin = (options) => {
    const transformer = async (ast) => {
        visit(ast, 'emphasis', async (node) => {
            let value = node.children[0].value
            let jargon = findMatch(value);
            if (jargon){
                node.type = 'link';
                node.url="#"+jargon.replace(" ","-");
                node.data= {name:jargon, className:'jargon'}
                node.title = jargon;
            }
        });
    };
    return transformer;
};

export default plugin;