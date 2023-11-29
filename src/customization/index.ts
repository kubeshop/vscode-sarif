import { CUSTOMIZATIONS } from './customizations';

export function getCustomization<T_DATA>(name: string, defaultValue: T_DATA): T_DATA {
    return (CUSTOMIZATIONS[name] ?? defaultValue) as T_DATA;
}
