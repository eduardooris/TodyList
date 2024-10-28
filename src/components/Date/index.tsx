import { forwardRef, useState, useImperativeHandle } from "react";
import {
  View,
  Button,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import If from "../If";
import { Design } from "../../util/Design";
import moment from "moment";
import { formatDate } from "../../util/formatDate";
interface DatePickerProps {
  onClose: (date: string) => void;
}

const DatePicker = forwardRef(({ onClose }: DatePickerProps, ref) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setShow(true),
  }));

  const onChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShow(false);
      if (selectedDate) {
        setDate(selectedDate);
        onClose(formatDate(selectedDate));
      } else {
        onClose(formatDate(date));
      }
    } else if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const confirmDate = () => {
    setShow(false);
    onClose(formatDate(date));
  };

  return (
    <If condition={show}>
      <View>
        <If condition={Platform.OS == "ios"}>
          <View style={styles.container}>
            <Text style={styles.title}>Escolha uma data</Text>
            <TouchableOpacity onPress={confirmDate}>
              <Text style={styles.title}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </If>
        <DateTimePicker
          mode="date"
          display="spinner"
          locale="pt-BR"
          onChange={onChange}
          value={date}
          minimumDate={new Date()}
        />
      </View>
    </If>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.Brand.Default,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: Design.Neutral.White,
    fontSize: 15,
    fontWeight: "600",
  },
});

export default DatePicker;
