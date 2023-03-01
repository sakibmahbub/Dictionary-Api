const handleSearch = async () => {
  const inputValue = document.getElementById("input-field").value;
  if (inputValue) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.title === "No Definitions Found") {
      alert(data.message);
    }
  } else {
    alert("Please enter your text");
  }
};
