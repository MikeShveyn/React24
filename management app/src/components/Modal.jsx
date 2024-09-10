import {createPortal} from 'react-dom'
import { forwardRef, useRef, useImperativeHandle } from 'react'
import Button from './Button'

const Modal = forwardRef(function Modal({children, button}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => { // used to call method from outsdide
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/900 p-4 rounded-md shadow-md'>
        {children}
        <form className='mt-4 text-right' method='dialog'>
            <Button>{button}</Button>
        </form>
    </dialog>, document.getElementById("modal-root"))
})

export default Modal;