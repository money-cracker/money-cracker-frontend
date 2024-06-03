import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'
import clsx from 'clsx'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'text' | 'contained' | 'outlined'
  color?: 'primary' | 'secondary' | 'tertiary'
  width?: string | number
  height?: string | number
  textClassName?: string
  children: ReactNode | string
}

export const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  width,
  height,
  textClassName,
  className,
  ...rest
}: buttonProps) => {
  return (
    <button
      {...rest}
      data-variant={variant}
      data-color={color}
      className={clsx('mc-button', className)}
      style={{ width, height }}
    >
      {typeof children === 'string' ? (
        <span className={textClassName}>{children}</span>
      ) : (
        children
      )}
    </button>
  )
}
