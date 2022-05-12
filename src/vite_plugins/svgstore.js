/* eslint-disable */
import path from 'path'
import fs from 'fs'
import store from 'svgstore'
import { optimize } from 'svgo'

export const svgstore = (options = {}) => {
    const inputFolder = options.inputFolder || 'src/assets/icons';
    return {
        name: 'svgstore',
        resolveId(id) {
            if (id === '@svgstore') {
                return 'svg_bundle.js'
            }
        },
        load(id) {
            if (id === 'svg_bundle.js') {
                const sprites = store(options)
                const iconsDir = path.resolve(inputFolder)
                for (const file of fs.readdirSync(iconsDir)) {
                    const filePath = path.join(iconsDir, file);
                    const svgid = path.parse(file).name;
                    let code = fs.readFileSync(filePath, { encoding: 'utf-8' });
                    sprites.add(svgid, code)
                }
                const { data: code } = optimize(sprites.toString({ inline: options.inline }), {
                    plugins: [
                        'cleanupAttrs', 'removeDoctype', 'removeComments', 'removeTitle', 'removeDesc',
                        'removeEmptyAttrs',
                        { name: "removeAttrs", params: { attrs: "(data-name|data-xxx)" } }
                    ]
                })
                return `const div = document.createElement('div')
                    div.innerHTML = \`${code}\`
                    const svg = div.getElementsByTagName('svg')[0]
                    if (svg) {
                        svg.style.position = 'absolute'
                        svg.style.width = 0
                        svg.style.height = 0
                        svg.style.overflow = 'hidden'
                        svg.setAttribute("aria-hidden", "true")
                    }
                    // listen dom ready event
                    document.addEventListener('DOMContentLoaded', () => {
                        if (document.body.firstChild) {
                        document.body.insertBefore(div, document.body.firstChild)
                        } else {
                        document.body.appendChild(div)
                        }
                    })`
            }
        }
    }
}