import notesStore from "../stores/notesStore"

export default function UpdateForm(){
    const store = notesStore();

    if(!store.updateForm._id) return <></>;
    return(
        <div className="modeContainer">
            <h1>Update note</h1>
            <div className="divider"></div>
            <form onSubmit={store.updateNote} className="createContainer">
            <input onChange={store.handleUpdate} value={store.updateForm.title} name='title' placeholder="Title" required className="createTitle" maxLength={45}/>
            <textarea onChange={store.handleUpdate} value={store.updateForm.body} name='body' placeholder="Content (enter doesn't work here it'll be inline idk why o.o)" required className="createBody"/>
            <button type='submit' className="button">Update note</button>
            </form>
        </div>
    )
}