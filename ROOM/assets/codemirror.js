import CodeMirror from 'codemirror';

const mirror = (el, lang, value, readonly) => {
    return CodeMirror(el, {
        value: value || '',
        theme: 'one-dark',
        lineNumbers: true,
        readOnly: readonly,
        mode: lang
    });
};

export default mirror;
