import Input from "./Input";
import {useRef} from 'react'
import Modal from './Modal'

export default function NewProject({addProject, cancelProject}) {
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const errorModal = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
            //show modal
            errorModal.current.open();
            return;
        }

        addProject({
            title : enteredTitle, 
            description: enteredDescription,
            dueDate: enteredDate
        })
    }
    
    const handleCancel = () => {
        cancelProject()
    }

    return <>
    <Modal ref={errorModal} button={'Close'}>
        <h2  className="text-xl font-bold text-stone-700 my-4">Invalid Inputs</h2>
        <p className="text-stone-600 mb-4">Please fill all inputs.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={handleCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="text-stone-50 hover:text-stone-100 bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button></li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" isTextArea={false} />
          <Input ref={description} label="Description" isTextArea={true} />
          <Input type="date" ref={date} label="Due Date" isTextArea={false} />
        </div>
    </div>
    </>
    
}