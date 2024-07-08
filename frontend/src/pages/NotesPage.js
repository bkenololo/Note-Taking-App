import { useEffect } from "react";
import Notes from "../components/notes";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import notesStore from "../stores/notesStore";

export default function NotesPage(){
    const store = notesStore();
 
    // use effect
    useEffect(() => {
      store.fetchNotes();
    }, [])

    return (
        <div className='margin-left-100px main-container'>
            <Notes />
            <UpdateForm />
            <CreateForm />
        </div>
    );
}