export function getFormData(value) {
  const newData = new FormData();
  newData.append("files", value.files);
  newData.append("price", value.price);
  newData.append("name", value.title);
  newData.append("description", value.shotDescr);
  newData.append("description_full", value.longDescr);

  return newData;
}
