
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let user = 
  {
    "login": "konain1",
    "id": 85240240,
    "node_id": "MDQ6VXNlcjg1MjQwMjQw",
    "avatar_url": "https://avatars.githubusercontent.com/u/85240240?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/konain1",
    "html_url": "https://github.com/konain1",
    "followers_url": "https://api.github.com/users/konain1/followers",
    "following_url": "https://api.github.com/users/konain1/following{/other_user}",
    "gists_url": "https://api.github.com/users/konain1/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/konain1/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/konain1/subscriptions",
    "organizations_url": "https://api.github.com/users/konain1/orgs",
    "repos_url": "https://api.github.com/users/konain1/repos",
    "events_url": "https://api.github.com/users/konain1/events{/privacy}",
    "received_events_url": "https://api.github.com/users/konain1/received_events",
    "type": "User",
    "site_admin": false,
    "name": "kaunain kasab",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "👋 Hello, I'm kaunain kasab a passionate web developer on a mission to craft amazing digital experiences.\r\n\r\n🚀 I specialize in front-end and back-end developme",
    "twitter_username": null,
    "public_repos": 154,
    "public_gists": 0,
    "followers": 5,
    "following": 6,
    "created_at": "2021-06-02T14:22:33Z",
    "updated_at": "2024-07-16T09:45:50Z"
  }
  


app.get('/profile',(req,res)=>{
res.json({user})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})