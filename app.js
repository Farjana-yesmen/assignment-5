const chanda =[
['Farju','017734656','100' ],
['Jesmen','015734656','450' ],
['Alo','017733656','6778' ],
['Topn','015734656','234' ],
['Sila','017834656','567' ],
['Yesmen','015734656','333'],
];
total_amount =0;
chanda.sort().map((data,i)=>{
console.log(`${i+1}.Name : ${data[0]} - Amount : ${data[2]}tk`);
total_amount += +(data[2]);
});
console.log(`
-------------------------------------------
             Total Amount : ${total_amount}tk
`);
