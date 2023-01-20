type LabelProps = JSX.IntrinsicElements['label'];

export const FormElement: React.FC<LabelProps> = ({children, htmlFor, ...props}) => (
  <label {...props} htmlFor={htmlFor}>
    <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select season</span>
    {children}
  </label>
);
