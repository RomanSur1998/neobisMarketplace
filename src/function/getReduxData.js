export function getReduxData(data, fileArray) {
  const formData = {
    ...data,
    files: fileArray.map((elem) => {
      return URL.createObjectURL(elem);
    }),
    id: Math.random() * 100,
    reiting: 100,
    name: data.title,
    description: data.shotDescr,
    fullDescription: data.longDescr,
  };
  return formData;
}
