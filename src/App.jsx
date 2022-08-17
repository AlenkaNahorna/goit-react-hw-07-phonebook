import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Box } from 'styles/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { MainTitle, SubTitle } from 'components/ui/titles';

export const App = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="ml"
        m="0px auto"
        backgroundColor="secondaryColorBlue"
        width="100%"
        minHeight="100vh"
      >
        <MainTitle title="Phonebook" />
        <ContactForm />
        <SubTitle title="Contacts" />
        <Filter />
        <ContactList />
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
