import { MyBig } from "@/lib/big"

export const toPaise = (amountInRupees: number) => new MyBig(amountInRupees).mul(100).round(2).toNumber();
export const toRupees = (amountINPaise: number) => new MyBig(amountINPaise).div(100).round(2).toNumber();

export const toRupeeFromPaise = (amountInPaise: number) => new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR',
}).format(toRupees(amountInPaise))