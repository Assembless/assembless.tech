import React, { useRef, useState } from "react";

import { validateEmail } from './validators'
import { Dictionary } from "types"

/**
 * Super duper form hook.
 */
export const useForm = () => {

    const subscribtions = useRef([] as unknown as HTMLInputElement[]).current;
    const ref = useRef<FormHookReturn>(null as unknown as FormHookReturn);

    const [errors, setErrors] = useState({} as Dictionary<string>);

    // Functions and ref is initialized only once per lifetime!
    if (ref.current === null) {
        /**
         * Subscribes an input.
         * @example
         * <input name="myName" ref={subscribe} />
         */
        const subscribe = (r: HTMLInputElement) => {
            if (r instanceof HTMLInputElement) {
                subscribtions.push(r);
            }
        };

        /**
         * Handles submition of the form.
         * @example
         * <form onSubmit={onSubmit(callback)}>
         * ...
         * </form>
         */
        const onSubmit = (cb: Function) => (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            let values = null;

            try {
                values = mapSubscribtions(subscribtions);
                if (cb) cb(values);
            } catch (err) {
                setErrors(errs => {
                    errs[err.name] = err.message;
                    return errs;
                });
            }

        };

        /**
         * Clears inputs.
         * @argument include List of inputs that will be cleared.
         * @example
         * reset();
         * // or handpicked
         * reset([ "firstName" ]);
         */
        const reset = (include?: string[]) => {

            if (include !== undefined)
                subscribtions
                    .filter(el => include?.includes(el.name))
                    .forEach(el => el.value = '');
            else
                subscribtions
                    .forEach(el => el.value = '');
        }

        ref.current = { subscribe, onSubmit, reset, errors };

    }
    ref.current.errors = errors;


    return ref.current;
};

type FormHookReturn = {
    errors: Dictionary<string>;
    subscribe: (ref: HTMLInputElement) => void;
    onSubmit: (cb: Function) => (event: React.FormEvent<HTMLFormElement>) => void;
    reset: (include?: string[]) => void;
};

const mapSubscribtions = (subs: HTMLInputElement[]) => {
    const data: Dictionary<string | number | Date | null> = {};
    subs.forEach(sub => {
        data[sub.name] = sub.value;

        if (sub.required)
            fieldValidator(sub.name, sub.value, sub.type as unknown as HTMLInputElementType)
    })
    return data;
}

const fieldValidator = (name: string, value: any, type: HTMLInputElementType): boolean => {
    let isValid = false;

    switch (type) {
        case "email":
            isValid = validateEmail(value);
            break;
        case 'number':
            isValid = !isNaN(parseInt(value, 10));
            break;

        default:
            isValid = true;
            break;
    }

    if (!isValid)
        throw new ValidationError(name, value, type);

    return isValid;
}

class ValidationError extends Error {
    value: any;
    type: HTMLInputElementType;
    constructor(name: string, value: any, type: HTMLInputElementType) {
        super(`Expected ${type} for field ${name}, got ${value}`);
        this.name = name;
        this.value = value;
        this.type = type;
    }
}

type HTMLInputElementType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";