import propTypes from 'prop-types';
import { ContactListStyle, ContactItem, ButtonForDelete } from 'components/ContactList/ContactList.styled';

import { ReactComponent as DeletIcon } from '../Icon/remove-user.svg';


export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ContactListStyle>
      {contacts.map((contact, id) => (
        <ContactItem key={id}>
          {contact.name}: {contact.number}
          <ButtonForDelete
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            <DeletIcon width="32" heigth="32" />
          </ButtonForDelete>
          
        </ContactItem>
      ))}
    </ContactListStyle>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};