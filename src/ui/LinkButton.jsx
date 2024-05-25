
// eslint-disable-next-line react/prop-types
export default function LinkButton({children, to,onClick}) {
  return (
    <button onClick={onClick} to={to} className='text-sm text-blue-500 hover:text-blue-600 hover:underline'>{children}</button>
  )
}
