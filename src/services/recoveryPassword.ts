export const recoveryPassword = async (email: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(email)
        }, 1500)
    })
}