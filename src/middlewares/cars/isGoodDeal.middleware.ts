import { NextFunction, Request, Response } from "express";

function isGoodDealMiddleware(req: Request, res: Response, next: NextFunction) {
  const { priceFipe, price } = req.body
  const difference = priceFipe - price;
  const fivePercent = (priceFipe * 5) / 100;

  console.log(difference);
  console.log(fivePercent);
  console.log(difference > fivePercent);

  if (difference > fivePercent) {
    req.body.goodDeal = true

    return next()
  }
  req.body.goodDeal = false
  return next()
}

export default isGoodDealMiddleware
