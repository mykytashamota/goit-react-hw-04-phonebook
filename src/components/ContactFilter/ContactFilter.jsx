import { Input, Label } from './ContactFilter.styled';

export const ContactFilter = ({ onChange, value }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={onChange} value={value} />
    </Label>
  );
};

export default ContactFilter;
