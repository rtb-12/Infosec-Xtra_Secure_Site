const puppeteer = require('puppeteer');

// Function to handle form submission
document.getElementById("linkForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const linkURL = document.getElementById("linkURL").value;
    openLinkViaPuppeteer(linkURL);
    document.getElementById("linkForm").reset(); // Reset form fields
});

// Function to open the submitted link via Puppeteer session
async function openLinkViaPuppeteer(linkURL) {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set local storage flag
    await page.goto(linkURL);
    await page.evaluate(() => {
        localStorage.setItem('flag', 'flag{1t_w4s_s1m9le_X&&}');
    });

    // Close the browser
    await browser.close();
}