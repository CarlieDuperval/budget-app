import React from 'react'
import { Card } from 'react-bootstrap'
import { currencyFormatter } from './Tools'
import './BudgetCard.css'

const BudgetCard = ({name, amount, max}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title className='card-title'>
                <div>{name}</div>
                <div>
                  {currencyFormatter.format(amount)}/ {currencyFormatter.format(max)}
                  </div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}
export default BudgetCard;