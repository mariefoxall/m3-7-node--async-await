// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    // console.log(num);
    if (typeof num === "number") {
      console.log("wait for it...");
      setTimeout(() => {
        const doubleNum = num * 2;
        // console.log("num", num);
        resolve(doubleNum);
      }, 2000);
    } else {
      reject("not a number");
    }
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const step1 = await doublesLater(num);
    const step2 = await doublesLater(step1);
    const step3 = await doublesLater(step2);
    return step1 + step2 + step3;
  } catch (error) {
    console.log("error: " + error);
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
