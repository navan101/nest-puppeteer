import { Injectable } from '@nestjs/common';
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

@Injectable()
export class CheckService {
    
    async checkPrice(url) {
        // url = 'https://www.amazon.com/WH-1000XM3-Wireless-canceling-Headset-International/dp/B07H2DBFQZ/'
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.reload();

        let html = await page.evaluate(() => document.body.innerHTML);
        $('#priceblock_ourprice', html).each(function() {
            let dollarPrice = $(this).text();
            var currentPrice = Number(dollarPrice.replace(/[^0-9.-]+/g,""));
            if(currentPrice < 300) {
                console.log("BUY!!! " + currentPrice);
                return currentPrice
                // sendNotification(currentPrice);
            }
        })
        // await browser.close();
        // return url
        
    }
    
    // async function sendNotification(price) {
    
    //     let textToSend = 'Price dropped to ' + price;
    //     let htmlText = `<a href=\"${url}\">Link</a>`;
    
    //     let transporter = nodemailer.createTransport({
    //         host: 'smtp.gmail.com',
    //         port: 587,
    //         secure: false, // true for 465, false for other ports
    //         auth: {
    //           user: 'navan0710@gmail.com', // generated ethereal user
    //           pass: 'Nav@123456' // generated ethereal password
    //         },
    //         use_authentication: false,
    //         tls: { rejectUnauthorized: false },
    //       });
      
    //       // setup email data with unicode symbols
    //       let mailOptions = {
    //         from: 'navan0710@gmail.com', // sender address
    //         to: 'nguyenanhvan.net@gmail.com', // list of receivers
    //         subject: 'Price dropped to ' + price, // Subject line
    //         text: textToSend, // plain text body
    //         html: htmlText // html body
    //       };
      
    //       // send mail with defined transport object
    //       transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //           return console.log(error);
    //         }
    //         console.log('Message sent: %s', info.messageId);
    //         // Preview only available when sending through an Ethereal account
    //         // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
    //         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //       });
    // }
    
    // (async () => {
    //     let page = await configureBrowser();
    
    //     let job = new CronJob('*/30 * * * * *', function() {
    //         checkPrice(page);
    //     }, null, true, null, null, true);
    //     job.start();
    // })();
    
    
}