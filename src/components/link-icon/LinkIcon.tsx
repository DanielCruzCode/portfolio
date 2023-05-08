import { ComponentType, ReactNode } from 'react'

interface LinkIconProps {
  children?: ReactNode,
  href: string,
  Icon: ComponentType
}

export function LinkIcon ({ children, href, Icon }: LinkIconProps) {
  return (
    <>
      <a href={href} target="_blank">
        <Icon/>
        {children}
      </a>
    </>
  )
}
