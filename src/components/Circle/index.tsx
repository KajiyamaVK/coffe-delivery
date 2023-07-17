import { ICircles } from '../../types/ICircles'
import { Main } from './styles'
import Icon from '../Icon'

export default function Circle({
  size,
  color,
  iconName,
  iconSize,
  iconColor,
  text,
}: ICircles) {
  return (
    <Main size={size} color={color}>
      {iconName && iconSize && iconColor && (
        <Icon name={iconName} color={iconColor} size={iconSize} />
      )}
      {text && <span>{text}</span>}
    </Main>
  )
}
