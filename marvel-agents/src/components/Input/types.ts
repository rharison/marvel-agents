export type InputType = 'email' | 'password'

export type InputProps = {
    type: InputType
}

export type ContentByType = {
    [key in InputType]: {
        placeholder: string,
        icon: JSX.Element
    }
}