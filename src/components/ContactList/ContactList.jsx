import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteItem,
  getContact,
  getFilterWord,
  fetchContacts,
} from '../../redux/contactsSlice';
import {
  ContactsList,
  ContactsListItem,
  ContactsListText,
} from './ContactList.styled';
import { SecondaryButton } from 'components/ui/buttons/SecondaryButton';

export const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector(getContact);
  console.log(items);
  const filter = useSelector(getFilterWord);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedValue = filter.toLowerCase();
  const filteredContacts = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
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
            Delate
          </SecondaryButton>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
