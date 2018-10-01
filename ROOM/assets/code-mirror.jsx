import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import Mirror from 'codemirror'

class Wrapper extends React.Component {
    getLang(mode) {
        switch(mode) {
            case 'htmlmixed': return 'html';
            case 'javascript': return 'js';
            default: return mode;
        }
    }
    editorDidMount(editor) {
        this.editor = editor;
        this.props.onMount && this.props.onMount(editor);
    }
    render() {
        const options = {
            theme: 'one-dark',
            lineNumbers: true,
            readOnly: this.props.readonly,
            mode: this.props.lang,
            keyMap: 'sublime',
            matchBrackets: true,
            matchTags: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            showHint: true,
            extraKeys: {
                'Ctrl-Space': 'autocomplete'
            }
        };

        return (
            <CodeMirror
                options={options}
                value={this.props.value}
                editorDidMount={this.editorDidMount.bind(this)}
                onBeforeChange={(editor, diff, value) => {
                    this.props.onChange && this.props.onChange(editor, diff, value, this.getLang(this.props.lang));
                }}
            />
        );
    }
}

export default Wrapper;
