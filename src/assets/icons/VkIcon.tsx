interface Prop {
  className: string
  refProp?: any
}

export const VkIcon = ({ className, refProp }: Prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VK"
      role="img"
      viewBox="0 0 512 512"
      className={`${className}`}
      ref={refProp}
    >
      <rect width="512" height="512" rx="15%" fill="#5281b8" />
      <path
        fill="#ffffff"
        d="M274 363c5-1 14-3 14-15 0 0-1-30 13-34s32 29 51 42c14 9 25 8 25 8l51-1s26-2 14-23c-1-2-9-15-39-42-31-30-26-25 11-76 23-31 33-50 30-57-4-7-20-6-20-6h-57c-6 0-9 1-12 6 0 0-9 25-21 45-25 43-35 45-40 42-9-5-7-24-7-37 0-45 7-61-13-65-13-2-59-4-73 3-7 4-11 11-8 12 3 0 12 1 17 7 8 13 9 75-2 81-15 11-53-62-62-86-2-6-5-7-12-9H79c-6 0-15 1-11 13 27 56 83 193 184 192z"
      />
    </svg>
  )
}
