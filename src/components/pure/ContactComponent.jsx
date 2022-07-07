import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';
import { useEffect } from 'react';
import { useRef } from 'react';

const ContactComponent = ({contact, remove, connect}) => {
 const statusRef = useRef(null)
 
  useEffect(() => {
    console.log('Created Contact');
    return () => {
      console.log(`Contacto:  is goin to unmount`);
    };
  }, [contact]);
 

  return (
   
    <tr className='fw-normal'>
      <th>
        <span className='ms-2 p-2'>{contact.nombre}</span>
      </th>
      <td className='align-middle p-2'>
        <span>{contact.apellido}</span>
      </td>
      <td className='align-middle p-2'>
        {/**Execution of function to return badge element */}
        <span>{contact.telefono}</span>
      </td>
      <td className='align-middle p-2'>
        {contact.email}
        
      </td>
      <td>
        <span>{connect}</span>
        
      </td>
      <td>
         <i
          onClick={() => remove(contact)}
          className='bi-trash task-actions m-2'
          style={{color: 'tomato', fontSize: '1.2rem'}}
        ></i>
      </td>
    </tr>
    
  )
}
ContactComponent.protoType = {
  contact : PropTypes.instanceOf(Contact).isRequired,
  remove: PropTypes.func.isRequired,
  connect: PropTypes.bool.isRequired
}

export default ContactComponent;