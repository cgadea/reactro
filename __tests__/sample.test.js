import chromedriver from 'chromedriver';
import React from 'react';
import { Builder, By } from 'selenium-webdriver';

it('does stuff', async function() {
  var driver = new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000/');
	await driver.findElements(By.className('listItem--concern'));
});
