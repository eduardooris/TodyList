import moment from "moment";

export const formatDate = (string: Date): string => {
  return moment(string).format("DD/MM/YYYY");
};
