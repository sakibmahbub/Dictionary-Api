const handleSearch = async () => {
  const inputValue = document.getElementById("input-field").value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};
