interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
  action: () => void;
}

export default function Button({
  buttonLabel,
  buttonBackgroundColor,
  action,
}: ButtonProps) {
  return (
    <button
      onClick={action}
      className={`px-4 py-2 rounded-md text-white bg-${buttonBackgroundColor}-500`}
    >
      {buttonLabel}
    </button>
  );
}

