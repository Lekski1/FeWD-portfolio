import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: ['src/ts/get_comic.ts', 'src/ts/text_moving.ts'],
    output: [
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].js', 
        }
    ],
    plugins: [
        nodeResolve({ browser: true }),
        terser({
            format: {
                comments: false, 
                beautify: true, 
            }
        }),
        typescript(),
    ],
};
