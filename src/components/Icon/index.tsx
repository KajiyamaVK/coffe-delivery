import { ReactNode } from 'react'
import { typeIcons } from '../../types/typeIcons'
import {
  MapPin,
  Trash,
  CurrencyDollar,
  ShoppingCart,
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
}

export default function Icon({ name, size, color }: IIcon) {
  let icon: ReactNode

  switch (name) {
    case 'map-pin-fill':
      icon = (
        <Main color={color}>
          <MapPin size={size} weight="fill" />
        </Main>
      )
      break
    case 'map-pin-line':
      icon = (
        <Main color={color}>
          <MapPin size={size} />
        </Main>
      )
      break
    case 'trash-line':
      icon = (
        <Main color={color}>
          <Trash size={size} />
        </Main>
      )
      break
    case 'dollar':
      icon = (
        <Main color={color}>
          <CurrencyDollar size={size} />
        </Main>
      )
      break
    case 'shopping-cart-fill':
      icon = (
        <Main color={color}>
          <ShoppingCart size={size} weight="fill" />
        </Main>
      )
      break
    case 'timer-fill':
      icon = (
        <Main color={color}>
          <Timer size={size} weight="fill" />
        </Main>
      )
      break
    case 'package-fill':
      icon = (
        <Main color={color}>
          <Package size={size} weight="fill" />
        </Main>
      )
      break
    case 'coffe-fill':
      icon = (
        <Main color={color}>
          <Coffee size={size} weight="fill" />
        </Main>
      )
      break
    case 'plus':
      icon = (
        <Main color={color}>
          <Plus size={size} />
        </Main>
      )
      break
    case 'minus':
      icon = (
        <Main color={color}>
          <Minus size={size} />
        </Main>
      )
      break
    case 'credit-card-line':
      icon = (
        <Main color={color}>
          <CreditCard size={size} />
        </Main>
      )
      break
    case 'money-line':
      icon = (
        <Main color={color}>
          <Money size={size} />
        </Main>
      )
      break
    case 'bank-line':
      icon = (
        <Main color={color}>
          <Bank size={size} />
        </Main>
      )
      break
    default:
      ;<></>
  }
  return icon
}
