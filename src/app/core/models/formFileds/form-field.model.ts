export interface FormField {
    input: 'text' | 'password' | 'checkbox' | 'select';
    id: string;
    labelText: string;
    value: string | boolean;
    isRequired: boolean;
    data?: string[]; // for select dropdowns
    error?: string;
    isChecked?: boolean;
    isHidden?: boolean;
  }
  