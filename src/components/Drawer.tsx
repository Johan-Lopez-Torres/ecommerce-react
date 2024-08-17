import React from 'react'
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormLabel,
    Input,
    Select,
    Stack,
    Textarea,
    useDisclosure,
} from '@chakra-ui/react'
import QuantityButton from './QuantityButton'

const AddIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        width='24'
        height='24'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
        />

    </svg>
)

 const categories = [
    {
        id: 1,
        name: 'Category 1',
        description: 'Description for category 1',
    },
    {
        id: 2,
        name: 'Category 2',
        description: 'Description for category 2',
    },
    {
        id: 3,
        name: 'Category 3',
        description: 'Description for category 3',
    },
];

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef<HTMLInputElement>(null)

    return (
        <>
            <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
                Create user
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Create product
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='username'>Name</FormLabel>
                                <Input
                                    ref={firstField}
                                    id='username'
                                    placeholder='Please enter user name'
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='username'>Quantity</FormLabel>
                                
                                    <QuantityButton />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                                {
                                    <Select id='owner' placeholder='Please select owner'>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </Select>
                                }                     

                            </Box>

                            <Box>
                                <FormLabel htmlFor='desc'>Description</FormLabel>
                                <Textarea id='desc' />
                            </Box>


                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}



export default DrawerExample;