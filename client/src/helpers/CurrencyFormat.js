 
 const CurrencyFormat = ({price})=>{

  return Intl.NumberFormat('en-IN',{
    currency: "INR",
    style:'currency',
    minimumFractionDigits: 2
  }).format(price/100);


 }

 export default CurrencyFormat