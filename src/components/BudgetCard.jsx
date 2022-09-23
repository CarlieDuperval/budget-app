import React from 'react'
import { Card } from 'react-bootstrap'

const BudgetCard = (name)=> {
  return (
    <Card>
        <Card.Body>
            <Card.Title>
                <div>{name}</div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}
