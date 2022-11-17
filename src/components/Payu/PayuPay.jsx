import React from "react";
import axios from "axios";
import { Button } from "../shared/Button";

const merchantId = process.env.REACT_APP_PAYU_MERCHANTID;
const accountId = process.env.REACT_APP_PAYU_ACCOUNTID;
const description = process.env.REACT_APP_PAYU_DESCRIPTION;
const test = process.env.REACT_APP_PAYU_TEST;
const responseUrl = process.env.REACT_APP_PAYU_RESPONSEURL;
const confirmationUrl = process.env.REACT_APP_PAYU_CONFIRMATIONURL;

export const PayuPay = ({
  referenceCode = "TestPayU",
  amount = "20000",
  tax = "3193",
  taxReturnBase = "16806",
  currency = "COP",
  signature = "7ee7cf808ce6a39b17481c54f2c57acc",
  buyerEmail = "test@test.com",
}) => {
  return (
    <>
      <form
        method="post"
        action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
      >
        <input name="merchantId" type="hidden" value={merchantId} />
        <input name="accountId" type="hidden" value={accountId} />
        <input name="description" type="hidden" value={description} />
        <input name="referenceCode" type="hidden" value={referenceCode} />
        <input name="amount" type="hidden" value={amount} />
        <input name="tax" type="hidden" value={tax} />
        <input name="taxReturnBase" type="hidden" value={taxReturnBase} />
        <input name="currency" type="hidden" value={currency} />
        <input name="signature" type="hidden" value={signature} />
        <input name="test" type="hidden" value={test ? test : null} />
        <input name="buyerEmail" type="hidden" value={buyerEmail} />
        <input name="responseUrl" type="hidden" value={responseUrl} />
        <input name="confirmationUrl" type="hidden" value={confirmationUrl} />
        {//<input name="Submit" type="submit" value="Enviar" />
        }
        <Button primary type="submit" >PAGO PAYU</Button>
      </form>
    </>
  );
};

/*
{
    key:"JPM7Fg",
    txnid: "PQI6MqpYr", 
    amount:"10.00",
    productinfo:"iPhone",
    firstname:"PayU User",
    email: "test@gmail.com",
    phone: "9876543210",
    surl: "https://apiplayground-response.herokuapp.com/",
    furl: "https://apiplayground-response.herokuapp.com/",
    hash: "70350f587b82e0d0ec68625879c5abda3941058b9ad6d4c00a777f1c04b69d89d7dfca0dcbae4127afa0699e11cec9cfe2bf493d42e1dfa97d0bc5c0e0daa1fd"
}

const handleClick = async()=>{
        


        let dato = await axios.post('https://test.payu.in/_payment',invoice);
        if(dato.data) console.log(dato.data);
    };
*/
