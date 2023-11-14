export function truncateString(str: string | undefined, maxLength: number) {
  if (str && str.length > maxLength) {
    const halfLength = Math.floor((maxLength - 3) / 2);
    const firstPart = str.substring(0, halfLength);
    const secondPart = str.substring(str.length - halfLength);
    return `${firstPart}...${secondPart}`;
  }
  return str;
}

export function truncateObjectStrings(
  obj: any,
  maxLength: number,
): object | string | undefined {
  if (typeof obj === 'string') {
    return truncateString(obj, maxLength);
  } else if (Array.isArray(obj)) {
    return obj.map((item) => truncateObjectStrings(item, maxLength));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj: { [key: string]: object | string | undefined } = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = truncateObjectStrings(obj[key], maxLength);
      }
    }
    return newObj;
  }
  return obj;
}
