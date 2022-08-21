import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  deleteItem,
  getContact,
  getFilterWord,
  fetchContacts,
} from 'redux/contactsSlice';
import {
  ContactsList,
  ContactsListItem,
  ContactsListText,
} from './ContactList.styled';
import {
  SecondaryButton,
  SecondaryButtonIcon,
} from 'components/ui/buttons/SecondaryButton';

export const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector(getContact);
  const filter = useSelector(getFilterWord);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedValue = filter.toLowerCase();
  const filteredContacts = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
    toast.success('Contact deleted!', {});
    dispatch(deleteItem(contactId));
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          {name}: <ContactsListText>{number}</ContactsListText>
          <SecondaryButton
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            <SecondaryButtonIcon />
            Delate
          </SecondaryButton>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
