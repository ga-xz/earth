 // 生成包含日期的卡密
    function generateDateCard() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // 月份从 0 开始，因此需要加 1
      const day = currentDate.getDate();

      const dateString = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
      const hashedCard = md5(dateString);

      document.getElementById("dateCard").innerText = hashedCard;
    }

    // 生成永久会员的卡密
    function generatePermanentCard() {
      const permanentString = "permanent";
      const hashedCard = md5(permanentString);

      document.getElementById("permanentCard").innerText = hashedCard;
    }

    // 验证卡密是否有效
    function validateCard() {
      const userInput = document.getElementById("inputCard").value.trim();
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // 月份从 0 开始，因此需要加 1
      const day = currentDate.getDate();

      const dateString = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
      const hashedCard = md5(dateString);
      
      const validationMessage = document.getElementById("validationMessage");

      if (userInput === hashedCard) {
        validationMessage.innerText = "Card is valid!";
        validationMessage.style.color = "green";
      } else {
        validationMessage.innerText = "Card is invalid!";
        validationMessage.style.color = "red";
      }
    }
