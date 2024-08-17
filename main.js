function formatPhone(phoneNumber) {
  let result = "";
  for (let char of phoneNumber) {
    if (char >= "0" && char <= "9") {
      result += char;
    }
  }
  if (result.startsWith("0")) {
    result = result.slice(1);
  }

  if (result.length !== 12) {
    result = "996" + result;
  }
  return result;
}

function getOperatorCode(phoneNumber) {
  return phoneNumber.slice(3, 6);
}

function checkNurTelecom(code) {
  let codes = ["507", "508", "509"];
  return codes.includes(code);
}
function checkMega(code) {
  let codes = ["550", "551", "552"];
  return codes.includes(code);
}

function checkBeeline(code) {
  let codes = ["500", "505", "701"];
  return codes.includes(code);
}
function detectOperator(phoneNumber) {
  let formattedPhoneNumber = formatPhone(phoneNumber);
  let operatorCode = getOperatorCode(formattedPhoneNumber);

  if (checkNurTelecom(operatorCode)) return "O!";
  if (checkMega(operatorCode)) return "Mega";
  if (checkBeeline(operatorCode)) return "Beeline";

  return "ERROR";
}

/////////////////

function hidePhone(phoneNumber) {
  let parts = phoneNumber.split(" ");

  let lastPart = parts[parts.length - 1];

  if (lastPart.length > 2) {
    lastPart = lastPart.slice(0, -2) + "xx";
  } else {
    lastPart = "xx".repeat(lastPart.length);
  }

  let hiddenPhoneNumber = [...parts.slice(0, -1), lastPart].join(" ");
  return hiddenPhoneNumber;
}

function capitalizeString(str) {
  if (str.length === 0) {
    return str;
  }

  let lowerStr = str.toLowerCase();
  let capitalizedStr = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);

  return capitalizedStr;
}
