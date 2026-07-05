import React from 'react';

const CustomButton = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  type = 'button',
  icon: Icon,
  className = '',
  download
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-md";
  
  const variants = {
    primary: "bg-gradient-to-r from-girly-pink to-girly-lavender text-darkBg-primary font-semibold hover:shadow-pink-glow",
    secondary: "bg-plum-muted text-girly-pink hover:text-offwhite border border-girly-pink/30 hover:border-girly-pink hover:shadow-pink-glow/20",
    outline: "border border-girly-lavender/30 text-girly-lavender hover:bg-girly-lavender/10 hover:border-girly-lavender hover:shadow-lavender-glow/20",
    text: "text-offwhite hover:text-girly-pink px-3 py-1 shadow-none"
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClass}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {Icon && <Icon size={18} className="transition-transform group-hover:translate-x-1" />}
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={buttonClass}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default CustomButton;
