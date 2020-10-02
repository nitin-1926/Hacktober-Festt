/**
 * Features of programme
 * 1.) Bot finds the person whom you are following but he/she is not following you
 * 2.) Bot removes the person from following list who is not following you
 * 
 * NOTE :-- this programme is not efficient because it traverse following list 2 times you ha
 */

const {
  Builder,
  By,
  Key,
  until
} = require('selenium-webdriver');

const {
  USERNAME,
  PASSWORD,
  BASE_URL,
  FOLLOWER_SELECTOR,
  FOLLOWING_SELECTOR
} = require('./constants');

const driver = new Builder()
  .forBrowser('chrome')
  .build();

function nullCheck(value) {
  return value === '' || value === undefined || value === null || value === 'PEOPLE' || value === 'HASHTAGS' || value === 'Verified';
}

async function login() {
  await driver.wait(until.elementLocated(By.name('username')));
  await driver.findElement(By.name('username')).sendKeys(USERNAME);
  await driver.findElement(By.name('password')).sendKeys(PASSWORD, Key.RETURN);
  await driver.wait(until.elementLocated(By.css('[data-testid=user-avatar]')));
  console.log(`--logged into account ${USERNAME}--`);
}

async function getNumbers() {
  const follower = await (await driver).findElement(By.css(FOLLOWER_SELECTOR)).getText();
  const following = await (await driver).findElement(By.css(FOLLOWING_SELECTOR)).getText();

  console.log(`${USERNAME} has ${follower} ${following}`);

  return [parseInt(follower), parseInt(following)];
}

async function getFollowersList(totalFollowers) {
  (await (await driver).findElement(By.css(FOLLOWER_SELECTOR))).click();
  let tempListOfFollowers = [];
  while (tempListOfFollowers.length === 0) {
    tempListOfFollowers = await (await driver).findElements(By.css('[role=dialog] li'));
  };
  while (tempListOfFollowers.length !== totalFollowers) {
    driver.executeScript("arguments[0].scrollIntoView(true);", tempListOfFollowers[tempListOfFollowers.length - 1]);
    const tempLen = tempListOfFollowers.length;
    while (tempListOfFollowers.length === tempLen) {
      tempListOfFollowers = await (await driver).findElements(By.css('[role=dialog] li'));
    }
  }
  const allElements = (await driver).findElements(By.css('[role=dialog] [data-testid=user-avatar]'));
  return Promise.all((await allElements).map(ele => {
    return ele.getAttribute("alt");
  }));
}

async function getFollowingList(totalFollowing) {
  (await (await driver).findElement(By.css(FOLLOWING_SELECTOR))).click();
  let tempListOfFollowing = [];
  while (tempListOfFollowing.length === 0) {
    tempListOfFollowing = await (await driver).findElements(By.css('[role=dialog] li'));
  };
  while (tempListOfFollowing.length !== totalFollowing) {
    driver.executeScript("arguments[0].scrollIntoView(true);", tempListOfFollowing[tempListOfFollowing.length - 1]);
    const tempLen = tempListOfFollowing.length;
    while (tempListOfFollowing.length === tempLen) {
      tempListOfFollowing = await (await driver).findElements(By.css('[role=dialog] li'));
    }
  }
  const allElements = (await driver).findElements(By.css('[role=dialog] [data-testid=user-avatar]'));
  return Promise.all((await allElements).map(ele => {
    return ele.getAttribute("alt");
  }));
}

function diffBetweenList(followerUserName, followingUserName) {
  const diff = followingUserName.filter(user => !followerUserName.includes(user));
  return diff;
}

async function main() {
  try {
    driver.get(BASE_URL);

    await login();

    driver.get(`${BASE_URL}${USERNAME}`);

    const [followers, following] = await getNumbers();

    let followersList = await getFollowersList(followers);
    followersList = followersList.map(f => f.replace("\'s profile picture", ""));
    driver.get(`${BASE_URL}${USERNAME}`);
    let followingList = await getFollowingList(following);
    followingList = followingList.map(f => f.replace("\'s profile picture", ""));

    const diffList = diffBetweenList(followersList, followingList);

    let index = 0;
    const id = setInterval(async () => {
      if (nullCheck(diffList[index]) || index >= diffList.length) {
        clearInterval(id);
      }
      driver.get(`${BASE_URL}${diffList[index]}`);
      index += 1;
      await (await driver).findElement(By.css('[aria-label="Following"]')).click();
      await (await driver).findElement(By.css('[role=dialog] button')).click();
    }, 5000);
  } catch (e) {
    console.log(e);
    (await driver).quit();
  }
}

main();