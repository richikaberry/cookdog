import React from "react";

export const PrimaryButton: React.FC<{
  type?: 'submit' | 'button';
  hidden?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ type = 'button', hidden = false, onClick, children  }) => {
  const hiddenButton = hidden ? 'hidden' : '';
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${hiddenButton} bg-green-600 rounded p-2 mt-4 hover:bg-white hover:text-green-600 hover:border hover:border-green-600`}
    >
      {children}
    </button>
  )
}