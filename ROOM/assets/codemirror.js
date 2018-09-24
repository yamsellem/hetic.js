import CodeMirror from 'codemirror';

const mirror = (el, lang, readonly) => {
    return CodeMirror(el, {
        value: '',
        theme: 'one-dark',
        lineNumbers: true,
        readOnly: readonly,
        mode: lang
    });
};

export default mirror;
