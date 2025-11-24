export default function Button({children, href}){
  if(href) return <a className='btn btn-primary' href={href}>{children}</a>
  return <button className='btn btn-primary'>{children}</button>
}