export const onFinish = values => {
    const { username, password } = values;
    if(username === 'admin' && password === 'vikrant') {
        console.log('logged in successul')

    } else {
        console.log('failed to loging in')
    }
}

export const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};