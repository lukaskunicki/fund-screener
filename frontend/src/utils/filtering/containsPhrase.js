const containsPhrase = (original, phrase) => {
  return original?.toLowerCase()?.includes(phrase?.toLowerCase());
};

export default containsPhrase;
