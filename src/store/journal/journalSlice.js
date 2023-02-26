import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({ 
name: 'journal', 
 initialState: { 
  isSaving: false, 
  messageSaved:'',
  notes:[],
  active: null,
  /* active: {
    id:'ABC123',
    title:'',
    body:'',
    date: 1234567
 imageUrls: [],//https://foto1.jpg
  }*/
 }, 
 reducers: { 
    savingNewNote: (state)=> {
        state.isSaving = true;

    },

    addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;

    },
    setActiveNote: (state, action) => {
        state.active = action.payload;
        state.messageSaved = '';

    },
    setNotes: (state, action) => {
        state.notes = action.payload;

    },
    setSaving: (state, action) => {
        state.isSaving = true;
        state.messageSaved = '';
        // todo:mensaje de error ...

    },
    updateNote: (state, action) => {
        state.isSaving = false;
        state.notes =   state.notes.map(note => {
           if(note.id === action.payload.id){
            return action.payload;
           } 

           return note;
        });

        // todo: mostrar mensaje de actualización 
        state.messageSaved = `${action.payload.title}, actualizada correctamente`;

    },
    deleteNoteById: (state, action) => {

    },
    
 } 
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
} = journalSlice.actions;