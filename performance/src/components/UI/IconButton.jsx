import { log } from '../../log.js';
import { memo } from 'react';
// ...props will rest event memo casue we redefine function we pass throw it 
// so we also use useCallback to not recreate functions
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
})

export default IconButton;
