'use client'

import React from "react";



export default function ContactForm() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {

      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "f9401c4c-5bce-4ddb-b411-5109d802e289");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <form onSubmit={onSubmit} id='contactform' className='px-6 flex flex-col w-full max-w-[576px] gap-4'>
        <input type="hidden" name="access_key" value="f9401c4c-5bce-4ddb-b411-5109d802e289"/>
        <label htmlFor="name">
            <input className='h-11 px-4 w-full rounded-md bg-grey-100  focus:outline-yellow-350' name="name" required id='name' type='text' placeholder='Navn'/>
        </label>
        <label htmlFor="email">
            <input className='h-11 px-4 w-full rounded-md bg-grey-100  focus:outline-yellow-350' name='name' required id='email' type='email' placeholder='E-post'/>
        </label>
        <fieldset className='px-4 '>
            <legend className='inline-block'>Hva gjelder det?</legend>
            <div className='grid mt-4 px-4 grid-cols-2 w-full text-nowrap gap-4'>
                <label htmlFor="catering"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='catering' value="catering" type='checkbox'/>   Catering</label>
                <label htmlFor="rentlocation"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='rentlocation' value="rentlocation" type='checkbox'/>   Leie av lokale </label>
                <label htmlFor="giftbox"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='giftbox' value="giftbox" type='checkbox'/>  Gavepakke</label>
                <label htmlFor="other"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='other' value="other" type='checkbox'/>    Annet</label>
            </div>
        </fieldset>
        <label className='w-full' htmlFor="message"><textarea id='message' name='message' className='bg-grey-100 w-full p-4 rounded-md focus:outline-yellow-350' rows={8} placeholder='Melding'/></label>
        <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
        <button className='text-base h-[44px] focus:bg-yellow-350 focus:outline-red-500 bg-yellow-300 flex justify-center items-center text-nowrap w-full hover:bg-yellow-350 hover:cursor-pointer rounded-lg pl-6 pr-6' type='submit'>Send</button>
        <span>{result}</span>
    </form>
  )
}
