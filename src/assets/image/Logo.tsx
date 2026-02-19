interface prop {
  classNaming: string
}

export const Logo = ({ classNaming }: prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Logotype.svg"
      width="71"
      height="71"
      viewBox="0 0 71 71"
      className={classNaming}
    >
      <rect className="cls-1" width="71" height="71" rx="35.5" ry="35.5" />
      <text
        id="LOGO"
        className="cls-2"
        transform="matrix(0.145, 0, 0, 0.145, 10.556, 40.852)"
      >
        LOGO
      </text>
    </svg>
  )
}
