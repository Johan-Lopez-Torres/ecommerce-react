
import { Button, HStack, Input,useNumberInput  } from '@chakra-ui/react'


function QuantityButton() {

    
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 1,
        max: 999,
        precision: 0,
      })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
  
    return (
      <HStack maxW='320px'>
        <Button {...dec}>-</Button>
        <Input  className='text-center' {...input} />
        <Button {...inc}>+</Button>

      </HStack>
    )
  }

  export default QuantityButton;