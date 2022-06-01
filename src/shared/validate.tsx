interface FData {
    [k:string]:number|string|undefined|null|FData
}

type Rule<T> = {
    key: keyof T,
    message: string,
} & (
    { type: 'required' } |
    { type: 'pattern', regex:RegExp}
)
type Rules<T> = Rule<T>[];
export type { Rules, Rule, FData }
export const validate = <T extends FData>(formData: T, rules: Rules<T>) => {
    type Errors = {
        [k in keyof T]?: string[]
    }
    const errors: Errors = {}
    console.log(rules)
    rules.map(rule => {
        const {key, type, message} = rule
        const value = formData[key]
        switch (type) {
            case 'required':
                if (isEmpty(value)) {
                    errors[key] = errors[key] ?? []
                    errors[key]?.push(message)
                }
                break;
            case 'pattern':
                if (!isEmpty(value) && !rule.regex.test(value!.toString())) {
                    errors[key] = errors[key] ?? []
                    errors[key]?.push(message)
                }
                break;
            default:
            return
        }
        console.log(errors)
    })
    return errors;
}

function isEmpty(value: undefined | null | string | number | FData) {
    return value === undefined || value === null || value === ''
}