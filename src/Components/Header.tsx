import { CopyIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    const[flag,setFlag] = useState(true);
  return(
    <Flex as="nav" p='10px' bg='gray.300'>
        <HStack spacing="1095px">
            <Text fontSize='2xl' fontWeight='semibold'> Note Maker </Text>
            {flag ?
                <Link to="/create">
                    <Button colorScheme='teal' onClick={()=>setFlag(!flag)} leftIcon={<EditIcon/>}> Create </Button>
                </Link>
            :
                <Link to="/">
                    <Button colorScheme='linkedin' onClick={()=>setFlag(!flag)} leftIcon={<CopyIcon/>}> Notes </Button>
                </Link>
            }
            
        </HStack>
    </Flex>
  ) ;
};

export default Header;
