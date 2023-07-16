import { ICircles } from "../../types/ICircles";
import {Main } from './styles'
import Icon from "../Icon";


export default function Circle({size, color,iconName,iconSize, iconColor}: ICircles ) {
  return (
    <Main size={size} color={color}>
       <Icon name={iconName} color={iconColor} size={iconSize}/>
      </Main>
  )
}