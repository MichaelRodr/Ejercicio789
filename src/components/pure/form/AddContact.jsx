import {useRef} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class'

const AddContact = ({add}) => {
  const nombreRef = useRef(null)
  const apellidoRef = useRef(null)
  const telefonoRef = useRef(null)
  const emailRef = useRef(null)

   function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nombreRef.current.value,
      apellidoRef.current.value,
      telefonoRef.current.value,
      emailRef.current.value
      
    );
    add(newContact);
  }

  return (
  <div className='form-control'>
    <form onSubmit={addContact} className='form-control row'>
      <div className='d-flex'>
        <div className='mb-3 col-3' >
        <label className="form-label" htmlFor='nombre'>Nombre</label>
        <input className="form-control col-3 " ref={nombreRef} type="text" placeholder='Ingrese nombre'id="nombre"/>
        </div>
        <div className='col-3'>
      <label className="form-label" htmlFor='apellido'>Apellido</label>
      <input className="form-control col-3" ref={apellidoRef} type="text" placeholder='Ingrese apellido'id="apellido"/>
        </div>
      </div>
      <div className=' col-sm-6'>
      <label className="form-label" htmlFor='telefono'>Telefono</label>
      <input className="form-control " ref={telefonoRef} type="text" placeholder='Ingrese telefono'id="telefono"/>
      <label className="form-label mt-3" htmlFor='email'>Email</label>
      <input className="form-control " ref={emailRef} type="text" placeholder='nombre@gmail.com'id="email"/>
      </div>
      <div className=''>
        <button  className='btn btn-large btn-primary mt-3'>Add</button>
      </div>
    </form>
  </div>  
  )
}
AddContact.protoType = {
  add: PropTypes.func.isRequired
}

export default AddContact