async function fetchData() {
  try {
    let res = await fetch(
      "https://xdc.blocksscan.io/api/accounts/xdcefD0d0cC73EE70A714c9E681882c1F342fFe7778"
      // "https://apothem.blocksscan.io/api/accounts/xdc1BD72127e921534943e97A6ca32db0bCE490B0c3" for apothem
    );
    const data = await res.json();
    console.log("data", data.balanceNumber);
    document.getElementById("data").innerHTML = data.balanceNumber;
  } catch (error) {
    console.log(error);
  }
}

fetchData();
