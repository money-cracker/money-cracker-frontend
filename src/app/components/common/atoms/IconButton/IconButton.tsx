import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const IconButton = ({
  children,
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <button className={clsx('flex items-center', className)} {...rest}>
      {children}
    </button>
  )
}
