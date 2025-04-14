function removeCommonLetters(name1, name2) {
    let arr1 = name1.toLowerCase().replace(/\s+/g, "").split("");
    let arr2 = name2.toLowerCase().replace(/\s+/g, "").split("");
  
    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr2.splice(index, 1);
        arr1.splice(i, 1);
        i--;
      }
    }
  
    return arr1.length + arr2.length;
  }
  
  function getFLAMESResult(count) {
    const flames = ["F", "L", "A", "M", "E", "S"];
    const meanings = {
      F: "Friend",
      L: "Love",
      A: "Affection",
      M: "Marriage",
      E: "Enemy",
      S: "Sister"
    };
  
    let index = 0;
    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      flames.splice(index, 1);
    }
  
    return meanings[flames[0]];
  }
  
  function calculateFLAMES() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const result = document.getElementById("result");
  
    if (!name1 || !name2) {
      result.innerText = "Please enter both names!";
      return;
    }
  
    const count = removeCommonLetters(name1, name2);
    const outcome = getFLAMESResult(count);
    result.innerText = `Your relationship is: ${outcome}`;
  }
  