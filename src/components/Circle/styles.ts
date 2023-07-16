import {styled} from 'styled-components'
import { enumSize } from '../../types/enumSizes'

export interface IMainProps{
    size: string,
    color: string
}

export const Main = styled.div<IMainProps>`
  width: ${(props) => enumSize[props.size as keyof typeof enumSize]};
  height: ${(props) => enumSize[props.size as keyof typeof enumSize]};
  background-color: ${(props) => props.theme.colors.products[props.color as keyof typeof props.theme.colors.products]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
