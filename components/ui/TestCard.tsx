import React from 'react'
import Text from './Text'
import Button from './Button'

export default function TestCard() {
  return (
    <div className='w-2xl p-4 border rounded-lg flex flex-col gap-4 '>
      <Text variant='headline' content='A Card!' as='h2' />
      <Text variant='primary' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente. Fuga est quae cupiditate expedita sunt impedit commodi, voluptate sapiente non odit, obcaecati ullam similique dolores dolor! At, totam nemo.' as='h2' />
      <Button variant='primary-fill' text='Click me' href='/' />
    </div>
  )
}
