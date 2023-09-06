import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const format = 'cjs';

export default {
    input: 'index.js',
    output: [
        {
            format,
        }
    ],
    plugin:[
        resolve({
            extention: ['.js']
        }),
        commonjs(),
    ]
}