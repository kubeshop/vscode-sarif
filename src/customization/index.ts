import { CUSTOMIZATIONS, CUSTOMIZATION_VALUES } from './customizations';

export function getCustomization<T_DATA extends CUSTOMIZATION_VALUES>(name: string, defaultValue: T_DATA): T_DATA {
    return (CUSTOMIZATIONS[name] ?? defaultValue) as T_DATA;
}
