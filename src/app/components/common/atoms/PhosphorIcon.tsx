import React from 'react'
import * as Phosphor from '@phosphor-icons/react'

type IIconSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
type IIcon = Omit<Phosphor.IconProps, 'size'>
type IPhosphor = typeof Phosphor

interface IPhosphorIcon extends IIcon {
  size?: IIconSize | number
  name: keyof IPhosphor
  disabled?: boolean
}

const PhosphorIcon = ({ name, size = 'medium', ...rest }: IPhosphorIcon) => {
  const PhosphorIcon = Phosphor[name] as Phosphor.Icon
  const sizeSet = {
    xsmall: 12,
    small: 16,
    medium: 20,
    large: 24,
    xlarge: 36,
  }
  const iconSize = typeof size === 'number' ? size : sizeSet[size]
  return <PhosphorIcon size={iconSize} {...rest} />
}

export { PhosphorIcon }
