import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [oppened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () =>
      format(date, "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!oppened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {oppened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onChange={onChange}
            minimumDate={new Date()}
            minutesInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
