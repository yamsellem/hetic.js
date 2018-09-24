import React from 'react';

class Result extends React.Component {
    template(js, css, html, resources) {
        let resourcesJS, resourcesCSS;
        if (resources.js)
            resourcesJS = resources.js.map(js => `<script type="text/javascript" src="${js}"></script>`).join('\n');
        if (resources.css)
            resourcesCSS = resources.css.map(css => `<link rel="stylesheet" href="${css}"></link>`).join('\n');

        return `
            <!DOCTYPE html>
            <html>
                <head>
                    ${resourcesCSS ? resourcesCSS : ''}
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    ${resourcesJS ? resourcesJS : ''}
                    <script id="code">${js}</script>
                </body>
            </html>
        `;
    }
    render() {
        const template = this.template(this.props.js, this.props.css, this.props.html, this.props.resources);
        return <iframe srcDoc={template}></iframe>;
    }
}

export default Result;
