// import { concat, orderBy, uniqBy } from "lodash";

/**
 * * Filter array with properties of another array
 */
const myArray = [{ userid: "100", projectid: "10", rowid: "0" }, { userid: "101", projectid: "11", rowid: "1"}, { userid: "102", projectid: "12", rowid: "2" }, { userid: "103", projectid: "13", rowid: "3" }, { userid: "101", projectid: "10", rowid: "4" }];
const myFilter = [{ userid: "101", projectid: "11" }, { userid: "102", projectid: "12" }, { userid: "103",  projectid: "11"}];

const myArrayFiltered = myArray.filter((el) => {
  return myFilter.some((f) => {
    return f.userid === el.userid && f.projectid === el.projectid;
  });
});

console.log(myArrayFiltered);


// Convert Time to seconds
// value: 3 unit: weeks
const timeToSeconds = (value, unit) =>  {
    const timeValues = {
        seconds: 1,
        minutes: 60,
        hours: 60 * 60,
        days: 60 * 60 * 24,
        weeks: 60 * 60 * 24 * 7,
        years: 60 * 60 * 24 * 365.25,
    };

    return parseFloat(value) * timeValues[unit];
}
console.log(timeToSeconds(2.5, "weeks"));

// export const dataSort = {
const dataSort = {
  populateList({
    targetArray,
    newArray,
    uniqId = "id",
    sortBy,
    sortOrder = "asc"
  }) {
    newArray = uniqBy(concat(newArray, targetArray), uniqId);
    newArray = orderBy(newArray, [sortBy], [sortOrder]);
    return newArray;
  },
  addOjectToList({
    targetArray,
    newObject,
    uniqId = "id",
    sortBy,
    sortOrder = "asc"
  }) {
    const newArray = targetArray.map(element => {
      if (newObject[uniqId] == element[uniqId]) {
        element = newObject;
      }
      return element;
    });
    return this.populateList({
      targetArray: newArray,
      newArray: [newObject],
      uniqId,
      sortBy,
      sortOrder
    });
  }
};

const slugify = (str, separator = "-") => {
  str = str.trim();
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  return str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes
    .replace(/^-+/, "") // trim - from start of text
    .replace(/-+$/, "") // trim - from end of text
    .replace(/-/g, separator);
};
console.log(slugify("Dam&*&&ilola"))