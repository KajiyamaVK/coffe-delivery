import { ReactNode } from 'react'
import { typeIcons } from '../../types/typeIcons'
import {
  MapPin,
  Trash,
  CurrencyDollar,
  ShoppingCartSimple,
  Timer,
  Package,
  Coffee,
  Plus,
  Minus,
  CreditCard,
  Money,
  Bank,
} from '@phosphor-icons/react'
import { Main } from './styles'

interface IIcon {
  name?: typeIcons
  size?: string
  color?: string
  top?: string
}

export default function Icon({ name, size, color, top }: IIcon) {
  let icon: ReactNode

  switch (name) {
    case 'map-pin-fill':
      icon = (
        <Main color={color} topSpacing={top}>
          <MapPin size={size} weight="fill" />
        </Main>
      )
      break
    case 'map-pin-line':
      icon = (
        <Main color={color} topSpacing={top}>
          <MapPin size={size} />
        </Main>
      )
      break
    case 'trash-line':
      icon = (
        <Main color={color} topSpacing={top}>
          <Trash size={size} />
        </Main>
      )
      break
    case 'dollar':
      icon = (
        <Main color={color} topSpacing={top}>
          <CurrencyDollar size={size} />
        </Main>
      )
      break
    case 'shopping-cart-fill':
      icon = (
        <Main color={color} topSpacing={top}>
          <ShoppingCartSimple size={size} weight="fill" />
        </Main>
      )
      break
    case 'timer-fill':
      icon = (
        <Main color={color} topSpacing={top}>
          <Timer size={size} weight="fill" />
        </Main>
      )
      break
    case 'package-fill':
      icon = (
        <Main color={color} topSpacing={top}>
          <Package size={size} weight="fill" />
        </Main>
      )
      break
    case 'coffee-fill':
      icon = (
        <Main color={color} topSpacing={top}>
          <Coffee size={size} weight="fill" />
        </Main>
      )
      break
    case 'plus':
      icon = (
        <Main color={color} topSpacing={top}>
          <Plus size={size} />
        </Main>
      )
      break
    case 'minus':
      icon = (
        <Main color={color} topSpacing={top}>
          <Minus size={size} />
        </Main>
      )
      break
    case 'credit-card-line':
      icon = (
        <Main color={color} topSpacing={top}>
          <CreditCard size={size} />
        </Main>
      )
      break
    case 'money-line':
      icon = (
        <Main color={color} topSpacing={top}>
          <Money size={size} />
        </Main>
      )
      break
    case 'bank-line':
      icon = (
        <Main color={color} topSpacing={top}>
          <Bank size={size} />
        </Main>
      )
      break
    default:
      ;<></>
  }
  return <div>{icon}</div>
}
