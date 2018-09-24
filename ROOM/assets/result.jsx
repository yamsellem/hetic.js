import React from 'react';

class Result extends React.Component {
    template(js, css, html) {
        return `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>${js}</script>
                </body>
            </html>
        `;
    }
    render() {
        const template = this.template(this.props.js, this.props.css, this.props.html);
        return <iframe srcDoc={template}></iframe>;
    }
}

export default Result;
