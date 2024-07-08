import notesStore from "../stores/notesStore";

export default function Notes(){
    const store = notesStore();
    return(
        <div className="max-width min-width">
            <h1>Your Notes</h1>
            <div className="divider"></div>
            {store.notes && store.notes.map(note => {
            return <div key={note._id} className="containerNote">
                <div className="note">
                    <h3 className="noteTitle">{note.title}</h3>
                    <p className="noteBody">{note.body}</p>
                </div>
                <button className="button btn-delete margin-top-14px" onClick={() => store.deleteNote(note._id)}>Delete note</button>
                <button className="button btn-update margin-top-14px" onClick={() => store.toggleUpdate(note)}>Update note</button>
            </div>
            })}
        </div>
    )
}

