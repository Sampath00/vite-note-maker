import * as React from 'react';
import { Note } from '../Models/note.model';
import { Box, Text, Card, CardBody, CardHeader, SimpleGrid, CardFooter, Button, Icon } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';


interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({note, handleDelete}) => {
  return (
  <div>
    <SimpleGrid columns={1} spacing={20} m={4}>
        <Card key={note.id} bg={note.color}>
            <CardHeader>
                <Text fontWeight='semibold'>{note.title}</Text>
            </CardHeader>
            <CardBody>
                <Text>{note.text}</Text>
            </CardBody>
            <CardFooter>
                <Text fontSize={'sm'}>{note.date}</Text>
            </CardFooter>
            <Box ml='20px' mb={3}>
                <Button colorScheme='red' leftIcon={<DeleteIcon/>} onClick={() => handleDelete(note.id)}>Delete</Button>
            </Box>
        </Card>
    </SimpleGrid>
    
  </div>
  );
};

export default Notes;
