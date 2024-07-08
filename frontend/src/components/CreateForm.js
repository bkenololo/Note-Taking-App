import notesStore from "../stores/notesStore";

export default function CreateForm(){
    const store = notesStore();

    if(store.updateForm._id) return <></>;
    return(
        <div className="modeContainer">
            <h1>Create note</h1>
            <div className="divider"></div>
            <form onSubmit={store.createNote} className="createContainer">
            <input onChange={store.updateCreateFormField} value={store.createForm.title} name='title' placeholder="Title" required className="createTitle" maxLength={45}/>
            <textarea onChange={store.updateCreateFormField} value={store.createForm.body} name='body' placeholder="Content (enter doesn't work here it'll be inline idk why o.o)" required className="createBody"/>
            <button type='submit' className="button">Create note</button>
            </form>
        </div>
    )
}