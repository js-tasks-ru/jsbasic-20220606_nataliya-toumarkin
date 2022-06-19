function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes('1xbet') || str.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');
checkSpam('xxxxx rabbit');