

async function main() {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'post',
    headers: {
        'Content-Type': "application/json",
        'Authorization': '' // передается токен BARER + Token
    },
    body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    }),
  });
  const data = await res.json();
  console.log('user', data);
}

main();