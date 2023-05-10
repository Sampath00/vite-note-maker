import { Box,FormHelperText,Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import * as React from 'react';
import { useRef } from 'react';
import { Note } from '../Models/note.model';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>

}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    const titleRef = useRef<HTMLInputElement|null>(null);
    const textRef = useRef<HTMLTextAreaElement|null>(null);
    const colorRef = useRef<HTMLInputElement|null>(null);

    const submitHandle = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setNotes([...notes,{
            id: (new Date).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";


    }

  return (
    <>
    <Box m={2} ml={10} mr={10}>
    <Text fontWeight={'bold'} fontSize={'2xl'} ml='20px'>Create Notes :</Text>
    <Box borderRadius='5px' boxShadow={'base'} border={'1px'} m={8} p={8}>
        <form onSubmit={submitHandle}>
        
        <FormControl isRequired mb="20px">
            <FormLabel>
                Title :
            </FormLabel>
            <Input type='text' name='title' placeholder='Enter the title' ref={titleRef}/>
        </FormControl>

        <FormControl mb="20px">
            <FormLabel>
                Color :
            </FormLabel>
            <Input type='color' name='color' defaultValue={'#dfdfdf'} ref={colorRef} />
            <FormHelperText>Click on the color tab to select the color</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="20px">
            <FormLabel>
                Discription :
            </FormLabel>
            <Textarea
                placeholder='Enter a detailed discription for the task..'
                name='text'
                ref={textRef}/>
        </FormControl>
        <Button type='submit' colorScheme='facebook'>Submit</Button>
        </form>
    </Box>
    </Box>
    </>
    );
};

export default CreateNotes;
