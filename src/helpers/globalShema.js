import * as yup from "yup";
export const globalShema = {
  addPoductShema: yup.object({
    price: yup.string().required(),
    title: yup.string().required(),
    shotDescr: yup.string().required(),
    longDescr: yup.string().required(),
  }),
};
