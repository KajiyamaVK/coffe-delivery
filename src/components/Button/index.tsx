import { NavLink } from 'react-router-dom'
import { Main, PaymentButton } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'

import Icon from '../Icon'
import { typeIcons } from '../../types/typeIcons'

import { ButtonHTMLAttributes } from 'react'

type ButtonType =
  | 'GoToCheckout'
  | 'PaymentMethod-CreditCard'
  | 'PaymentMethod-DebitCard'
  | 'PaymentMethod-Money'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  role: ButtonType
  className?: string
}

export default function Button({ role, className, onClick }: ButtonProps) {
  const formattedType = role.split('-')
  if (formattedType[0] === 'GoToCheckout') {
    return (
      <NavLink to="/checkout">
        <Main>
          <ShoppingCart weight="fill" size={22} />
        </Main>
      </NavLink>
    )
  } else if (formattedType[0] === 'PaymentMethod') {
    const nameValue = formattedType[1]
    let iconValue: typeIcons
    let labelValue

    switch (nameValue) {
      case 'CreditCard':
        iconValue = 'credit-card-line'
        labelValue = 'Credit Card'
        break
      case 'DebitCard':
        iconValue = 'bank-line'
        labelValue = 'Debit Card'
        break
      case 'Money':
        iconValue = 'dollar'
        labelValue = 'Money'
        break
      default:
        throw new Error(`Invalid button type: ${role}`)
    }

    return (
      <>
        {iconValue && labelValue && (
          <PaymentButton className={className} onClick={onClick}>
            <Icon name={iconValue} size="22" color="purple" />
            <span>{labelValue}</span>
          </PaymentButton>
        )}
      </>
    )
  }
}
