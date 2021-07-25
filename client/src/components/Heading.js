export const Heading = ({ size, children, className }) => {
  const headingClasses = `text-center mb-4 ${className}`

  switch (size) {
    case 1:
      return <h1 className={`display-3 ${headingClasses}`}>{children}</h1>
    case 2:
      return <h2 className={`display-5 ${headingClasses}`}>{children}</h2>
    default:
      break
  }
}
