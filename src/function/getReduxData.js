export function getReduxData(data, fileArray) {
  const formData = {
    ...data,
    files: fileArray.map((elem) => {
      return URL.createObjectURL(elem);
    }),
    isFavor: false,
    reiting: 100,
    name: data.title,
    description: data.shotDescr,
    fullDescription: data.longDescr,
  };
  return formData;
}
