type ButtonProps = {
    title: string;
    icon?: string;
    type: 'button' | 'submit';
    varaint: string
    onClick?: () => void;
    full?: boolean
}
const Button = ({title, type, icon, varaint, onClick, full}:ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`flexCenter gap-3 rounded-full border ${varaint} ${full && "w-full"}`}>
      {icon && <img src={icon} alt={title} width={24} height={24}/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button;
