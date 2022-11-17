export const convertToCurrency =(cost)=>{
    
    const number = Number(cost);
    console.log(typeof(cost))
    const test = number.toLocaleString(undefined,{
      style: 'currency',
      currency: "COP",
      maximumFractionDigits : 2, 
      minimumFractionDigits : 2,
    });
    return test
};