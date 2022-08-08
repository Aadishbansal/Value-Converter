function convert() {
  const number = document.getElementById("number").value;
  console.log(number);
  const convertTo = document.getElementsByName("convertTo").value;
  const convertFrom =
    document.getElementsByName("convertFrom").options[
      document.getElementsByName("convertFrom")[selectedIndex]
    ].text;
  console.log(convertTo + " " + convertFrom);
}
