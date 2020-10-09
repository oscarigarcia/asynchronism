const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey! cool");
    } else {
      reject("Salió mal...");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const somethingWillHappenSecond = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("el 2do es est");
      }, 200);
    } else {
      const error = new Error("FALLO!!");
      reject(error);
    }
  });
};

somethingWillHappenSecond()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappenSecond()])
  .then((response) => {
    console.log("Array of result", response);
  })
  .catch((err) => {
    console.log(err);
  });
