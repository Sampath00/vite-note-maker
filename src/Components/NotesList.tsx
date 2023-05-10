import * as React from 'react';
import {Note} from "../Models/note.model"
import Notes from './Notes';
import { Box, Text } from '@chakra-ui/react';

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes, setNotes}) => {

    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const renderNotes = ():JSX.Element[] => {
       return notes.map(note =>{
            return <Notes key={ note.id } note={note} handleDelete={handleDelete}/>
        })
    }
  return (
  <>
    <Box m={2} ml={10} mr={10}>
    <Box>
        <Text fontWeight={'bold'} fontSize={'2xl'} ml='20px'>Notes</Text>

        { notes.length===0 ?
        <Text textAlign="center">Your Box is Empty!!!</Text>:
        renderNotes() }
    </Box>
    </Box>
  </>
  );
};

export default NotesList;
