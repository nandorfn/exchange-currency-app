import React from 'react'
import Link from 'next/link';
import CurrencyDropdown from './CurrencyDropdown'

export default function Exchange() {
  const Options = [
    { value: 'IDR', label: 'IDR' },
    { value: 'USD', label: 'USD' },
  ];


  return (
    <div className='input-grub mt-4 mx-5'>
      <div className='d-flex flex-column container p-4 bg-body-secondary rounded-3 m-auto'>
      <input className='w-100 mx-auto' type="number" />
      <div className='d-flex justify-content-between gap-4'>
        <CurrencyDropdown id='to' options={Options} />
        <CurrencyDropdown id='from' options={Options} />
      </div>
      <Link href={``} className='mx-auto mt-4 w-25' passHref>
        <button type="button" className="btn btn-primary">Convert</button>
      </Link>
      </div>
    </div>
  )
}
