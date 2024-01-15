interface HamburgerProps {
  size: string;
  color: string;
}

export default function HamburgerIcon({ size, color }: HamburgerProps) {
  return (
    <svg width={size} height='auto' viewBox='0 0 17 14'>
      <path
        d='M1 1h15M1 7h15M1 13h15'
        strokeWidth='2'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        style={{ fill: color }}
      />
    </svg>
  );
}
