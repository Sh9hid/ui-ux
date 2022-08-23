const obj = {
    id :1182,
    username : 'johnsmith',
    active: true,
    emails : ['sh9@mysite.com', 'sh9@mywebsite.com']
}
const replacer = (key, value) => {
    if (key === 'id') return value.toString(16);
    if (key === 'username') return `@${value}`;
    if (key === 'emails') return `${value[0]}+ ${value.length-1}more.`; 
    return value;
};
console.log(JSON.stringify(obj, replacer, 2)); 

/*
{
  "id": "49e",
  "username": "@johnsmith",
  "active": true,
  "emails": "sh9@mysite.com+ 1more."
}
PS E:\New folder\Google Maps API> 


*/
