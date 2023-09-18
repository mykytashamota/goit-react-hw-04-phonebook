import { Button, Item } from './ContactListEl.styled';

export const ContactListEl = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactListEl;
