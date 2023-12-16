export function phoneMask(text) {
  if (!text) return text;
  const phoneNumber = text.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) {
    return phoneNumber;
  }
  if (phoneNumberLength < 7) {
    return ` ${phoneNumber.slice(0, 1)}(${phoneNumber.slice(
      1,
      4
    )})${phoneNumber.slice(4)}`;
  }
}
