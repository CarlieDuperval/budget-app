import React from 'react'
import { Card } from 'react-bootstrap'
import { currencyFormatter } from './Tools'
import './BudgetCard.css'

const BudgetCard = ({name, amount, max}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title className='card-title'>
                <div className='me-2'>{name}</div>
                <div className='amount-prop'>
                  {currencyFormatter.format(amount)}
                  <span className='text-muted fs-6 ms-1'>
                  / {currencyFormatter.format(max)}
                  </span>
                  </div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}
export default BudgetCard;