'use client'

import { redirect } from 'next/navigation'
import React from "react";



export default function ContactForm() {

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const form = e.currentTarget;
        const selectedCategories = formData.getAll("category"); 

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "73432160-3975-4d1c-962c-09a93ff48b7f",
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            category: selectedCategories,
            personvernserklaering: formData.get("personvernserklaering"),
            subject: `KONTAKTSKJEMA: ${formData.get('name')} har sendt deg en forespørsel`
          }),
        });
    
        const result = await response.json();
        if (result.success) {
          console.log(result);
          form.reset(); 
          redirect("/success")
        } else {
          console.error(result);
            
        }
      }
  return (
    <form onSubmit={handleSubmit} id='contactform' className='px-6 flex flex-col w-full max-w-[576px] gap-4'>
        <input type="hidden" name="access_key" value="f9401c4c-5bce-4ddb-b411-5109d802e289"/>
        <label htmlFor="name">Navn:
            <input className='h-11 px-4 w-full rounded-md bg-grey-100  focus:outline-yellow-350' name="name" required id='name' type='text'/>
        </label>
        <label htmlFor="email">E-post:
            <input className='h-11 px-4 w-full rounded-md bg-grey-100  focus:outline-yellow-350' name='email' required id='email' type='email'/>
        </label>
        <fieldset className='px-4'>
            <legend className='inline-block'>Hva gjelder det?</legend>
            <div className='grid mt-4 px-4 grid-cols-2 w-full text-nowrap gap-4'>
                <label htmlFor="catering"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='catering' value="catering" type='checkbox'/>   Catering</label>
                <label htmlFor="rentlocation"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='rentlocation' value="rentlocation" type='checkbox'/>   Leie av lokale </label>
                <label htmlFor="giftbox"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='giftbox' value="giftbox" type='checkbox'/>  Gavepakke</label>
                <label htmlFor="other"><input className='focus:outline-yellow-350 accent-yellow-350' name='category' id='other' value="other" type='checkbox'/>    Annet</label>
            </div>
        </fieldset>
        <label className='w-full' htmlFor="message">Melding:<textarea id='message' name='message' className='bg-grey-100 w-full p-4 rounded-md focus:outline-yellow-350' required rows={8}/></label>
        <div className="flex flex-row gap-1">
                  <input id="personvernserklaering" name="personvernserklaering" type="checkbox" required className=""></input>
                  <label htmlFor="personvernserklaering" className="font-sec text-sm">Jeg samtykker til at min informasjon blir lagret</label>
                </div>
        <button className='text-base h-[44px] focus:bg-yellow-350 focus:outline-red-500 bg-yellow-300 flex justify-center items-center text-nowrap w-full hover:bg-yellow-350 hover:cursor-pointer rounded-lg pl-6 pr-6' type='submit'>Send</button>
    </form>
  )
}
