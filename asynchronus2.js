//data fetching 
//API

// const fetchuser =(username,callback)=>{
//     console.log('Fetching...');
// setTimeout(()=>{ 
//   console.log('Now we have the user ');

//     callback({username});
// }, 2000)

// }

// const user = fetchuser('Michal',(user)=>{

//     console.log(` Your name is : ${user.username}`);
// });

const fetchuser = (username, callback) => {
    console.log('Fetching...');
    setTimeout(() => {
        console.log('Now we have the user ');
        console.log(`[now we have the photos ]`);
        callback({ username });
    }, 2000)

}

const fetchUserphotos = (username, callback) => {
    setTimeout(() => {
        console.log(`[now we have the photos  for ${username}]`);
        callback(['photo 1 ', 'photo 2']);
    }, 2000);
}

const photofetchdetails = (photo, details) => {
    setTimeout(() => {
        console.log(`[Now we have the photo details for the photo]`);

        callback('details...');
    }, 2000)
}



const user = fetchuser('Michal', (user) => {

    console.log(` Your name is : ${user.username}`);
    fetchUserphotos(user.username, (userphotos) => {
        console.log(`your photos are ${userphotos}`);

        photofetchdetails(user.username, (userphotos) => {
            console.log(`your photos are :{userphotos}`);

            photofetchdetails(userphotos[0], (details) => {
                console.log(`your photo details are ${sdetails}`);
            })
        })


    })


});