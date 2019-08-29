module.exports = (user, pro) => {
  let output = user.replace(/{%PRODUCTNAME%}/g, pro.productName);
  output = output.replace(/{%IMAGE%}/g, pro.image);
  output = output.replace(/{%PRICE%}/g, pro.price);
  output = output.replace(/{%FROM%}/g, pro.from);
  output = output.replace(/{%NUTRIENTS%}/g, pro.nutrients);
  output = output.replace(/{%QUANTITY%}/g, pro.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, pro.description);
  output = output.replace(/{%ID%}/g, pro.id);
  
  if(!pro.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;
}