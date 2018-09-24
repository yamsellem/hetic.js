const classnames = (...args) => {
    return args.reduce((memo, arg) => {
        switch (typeof arg) {
            case 'string': memo.push(arg); break;
            case 'object':
                Object.keys(arg).forEach(key => {
                    if (arg[key])
                        memo.push(key);
                });
                break;
        }
        return memo;
    }, []).join(' ');
};

export default classnames;
