import {useState, useEffect} from 'react'
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/ContactComponent'
import AddContact from '../pure/form/AddContact';

const ContactList = () => {

  const defaultContact1 = new Contact(
   'jesus',
   'Rodriguez',
   '+584249516860',
   'jesus@gmail.com',
   true

  )
  const defaultContact2 = new Contact(
    'Miguel',
    'Rodriguez',
    '+584263031538',
    'Miguel@gmail.com',
    false

  )
  const [ datos, setDatos ] = useState([defaultContact1, defaultContact2]);

  useEffect(() => {
    console.log('Task State has been modified');
    return () => {
      console.log('TaskList component is going to unmount...');
    };
  }, [datos]);

  function addContact(dato){
    console.log('adding new Contact:', dato);
    const index = datos.indexOf(dato);
    const tempContact = [...datos];
    tempContact.push(dato);
    setDatos(tempContact);
  }

  function deleteContact(dato) {
    console.log('Delete new Contact:', dato);
    const index = datos.indexOf(dato);
    const tempContact = [...datos];
    tempContact.splice(index,1);
    setDatos(tempContact);
  }

  function statusContact(dato) {
  datos.isConnect ? 'Online': 'Disconnect'
  }


  return (
    <div className='col-12 '>
      <div className='card'>
        {/*Card Header (tiltle) */}
        <div className='card-header p-3'>
          <h5>Your Constacts:</h5>
        </div>
        <AddContact 
        add={addContact}
       
        ></AddContact>
        <div
          className='card-body'
          data-mdb-perfect-scrollbar='true'
          style={{position: 'relative', height: '400px'}}
        >
          <table >
            <thead>
              <tr>
                <th className='m-2 p-2 ' scope='col '>Nombre</th>
                <th className='m-2 p-2 ' scope='col'>Apellido</th>
                <th className='m-2 p-2 ' scope='col'>Telefono</th>
                <th className='m-2 p-2 ' scope='col'>Email</th>
                <th className='m-2 p-2 ' scope='col'>Status</th>

              </tr>
            </thead>
            <tbody className=''>
              {datos.map((dato, index) => {
                return (
                  <ContactComponent
                    key={index}
                    contact={dato}
                    remove={deleteContact}
                     connect={datos.isConnect ? 'Online': 'Disconnect'}


                  ></ContactComponent>
                );
              })}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  )
}

export default ContactList