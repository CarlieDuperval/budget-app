import React from "react";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "./Tools";
import "./BudgetCard.css";
import getProgressBarVariant from "./ProgressVariant";

const BudgetCard = ({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) => {
  const refColor = [];
  if (amount > max) {
    refColor.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    refColor.push("bg-light");
  }
  return (
    <Card className={refColor.join(" ")}>
      <Card.Body>
        <Card.Title className="card-title">
          <div className="me-2">{name}</div>
          <div className="amount-prop">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack className="mt-4" direction="horizontal" gap="2">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              {" "}
              View My Expenses{" "}
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
